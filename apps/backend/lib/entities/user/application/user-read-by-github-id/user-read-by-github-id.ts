import { User } from "@user/domain/entities/user.entity";
import { UserRepository } from "@user/domain/repositories/user.repository";

export class UserReadByGithubId {
  constructor(private repository: UserRepository) {}

  async run(githubId: string): Promise<User> {
    return this.repository.readByGithubId(githubId);
  }
}
