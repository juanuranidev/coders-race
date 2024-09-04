import { User } from "@user/domain/entities/user.entity";
import { UserRepository } from "@user/domain/repositories/user.repository";

export class UserReadById {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<User> {
    return this.repository.readById(id);
  }
}
