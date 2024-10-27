import { User } from "@user/domain/entities/user.entity";
import { UuidAdapter } from "@shared/infrastructure/adapters/uuid.adapter";
import { UserCreateDto } from "@user/domain/dtos/user-create.dto";
import { UserRepository } from "@user/domain/repositories/user.repository";
import { UserReadByAuthId } from "../user-read-by-auth-id/user-read-by-auth-id";

export class UserReadOrCreate {
  constructor(
    private repository: UserRepository,
    private uuidAdapter: UuidAdapter,
    private userReadByAuthId: UserReadByAuthId
  ) {}

  async run(userDto: UserCreateDto): Promise<User> {
    const userFound: User | null = await this.userReadByAuthId.run(
      userDto.authId
    );
    if (userFound) {
      return userFound;
    }

    const uuid: string = await this.uuidAdapter.generate();

    const newUser: User = new User(
      uuid,
      userDto.name,
      userDto.image,
      userDto.authId,
      userDto.githubId,
      userDto.githubUsername
    );

    return this.repository.create(newUser);
  }
}
