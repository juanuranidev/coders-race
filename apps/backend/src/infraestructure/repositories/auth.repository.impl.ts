import { envs } from "../../config";
import { PrismaDb } from "../db/prisma";
import { JWTAdapter } from "../../config/adapters/jwt.adapter";
import { UserEntity } from "../../domain/entities/user.entity";
import { CustomError } from "../../domain/errors/custom.error";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { AuthRepository } from "../../domain/repositories/auth.repository";

const db = PrismaDb.execute();

export class AuthRepositoryImpl implements AuthRepository {
  async loginUser(loginUserDto: LoginUserDto): Promise<any> {
    try {
      let user = await db.user.findFirst({
        where: {
          githubId: loginUserDto.githubId,
        },
      });

      if (!user) {
        user = await db.user.create({ data: loginUserDto });
      }

      const token = await new JWTAdapter(envs.JWT_SEED).generateToken({
        id: user.id,
        githubId: user.githubId,
      });
      if (!token) throw CustomError.internalServer("Error while creating JWT");

      return {
        user: UserEntity.fromObject(user),
        token: token,
      };
    } catch (error) {
      throw CustomError.internalServer(`Error: ${error}`);
    }
  }
}
