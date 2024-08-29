import { PrismaDb } from "../db/prisma";
import { RaceEntity } from "../../domain/entities/race.entity";
import { CreateRaceDto } from "../../domain/dtos/race/create-race.dto";
import { RaceRepository } from "../../domain/repositories/race.repository";
import { CustomError } from "../../domain/errors/custom.error";

const db = PrismaDb.execute();

export class RaceRepositoryImpl implements RaceRepository {
  async create(race: CreateRaceDto): Promise<RaceEntity> {
    try {
      const raceCreated = await db.race.create({
        data: {
          ...race,
          user: { connect: { id: race.user } },
          code: { connect: { id: race.code } },
        },
      });

      return RaceEntity.fromObject({
        id: raceCreated.id,
        user: raceCreated.userId,
        code: raceCreated.codeId,
        cpm: raceCreated.cpm,
        timeInMs: raceCreated.timeInMs,
      });
    } catch (error: any) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
  async getById(id: number): Promise<RaceEntity> {
    try {
      const race = await db.race.findFirst({
        where: {
          id: id,
        },
        include: {
          code: {
            include: {
              language: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });
      if (!race) {
        throw CustomError.notFound("Race not found");
      }

      return RaceEntity.fromObject({
        ...race,
        user: race.userId,
        code: race.code!.text,
        language: race.code!.language!.name,
      });
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
}
