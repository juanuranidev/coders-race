import { User } from "@user/domain/entities/user.entity";
import { UserRepository } from "@user/domain/repositories/user.repository";

export class UserReadLeaderboard {
  constructor(private repository: UserRepository) {}

  async run(): Promise<User[]> {
    return this.repository.readLeaderboard();
  }
}
