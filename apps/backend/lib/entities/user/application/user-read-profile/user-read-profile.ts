import { User } from "@user/domain/entities/user.entity";
import { UserReadById } from "../user-read-by-id/user-read-by-id";
import { UserRepository } from "@user/domain/repositories/user.repository";
import { UserNotFoundError } from "@user/domain/errors/user-not-found.errors";

export class UserReadProfile {
  constructor(
    private repository: UserRepository,
    private userReadById: UserReadById
  ) { }

  async run(userId: string): Promise<User> {
    const userEntity: User | null = await this.userReadById.run(userId);

    if (!userEntity) {
      throw new UserNotFoundError();
    }

    return await this.repository.readProfile(userEntity);
  }
}
