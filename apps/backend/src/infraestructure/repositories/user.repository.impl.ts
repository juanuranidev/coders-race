import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { UserRepository } from "../../domain/repositories/user.repository";
import { PrismaDb } from "../db/prisma";

const db = PrismaDb.execute();
export class UserRepositoryImpl implements UserRepository {
  async getById(id: number): Promise<UserEntity | undefined> {
    try {
      const user = await db.user.findFirst({
        include: {
          _count: true,
        },
        where: {
          id: id,
        },
      });
      if (!user) {
        throw CustomError.notFound("User not found");
      }

      const averageUserCpm = await db.race.groupBy({
        by: ["userId"],
        _avg: {
          cpm: true,
        },
        where: {
          userId: user!.id,
        },
      });

      return UserEntity.fromObject({
        ...user,
        races: user?._count.races,
        averageCpm: averageUserCpm.length ? averageUserCpm[0]._avg.cpm : 0,
      });
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
  async getByGithubId(id: string): Promise<UserEntity | undefined> {
    try {
      const user = await db.user.findFirst({
        where: {
          githubId: id,
        },
      });
      if (!user) {
        throw CustomError.notFound("User not found");
      }

      return UserEntity.fromObject(user);
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
  async getUsersLeaderboard(): Promise<UserEntity[]> {
    try {
      const users = await db.user.findMany();
      if (!users.length) {
        return [];
      }

      const racesOrderByAverageCpm = await db.race.groupBy({
        by: ["userId"],
        _avg: {
          cpm: true,
        },
        orderBy: {
          _avg: {
            cpm: "asc",
          },
        },
        _count: {
          _all: true,
        },
      });
      if (!racesOrderByAverageCpm.length) {
        return users.map((user) => UserEntity.fromObject(user));
      }

      const usersWithAverageCpm = racesOrderByAverageCpm.map((race) => {
        return {
          races: race._count._all ? race._count._all : [],
          averageCpm: race._avg.cpm ? race._avg.cpm : 0,
          ...users.find((user) => user.id === race.userId),
        };
      });

      return usersWithAverageCpm.map((user) => UserEntity.fromObject(user));
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
}
