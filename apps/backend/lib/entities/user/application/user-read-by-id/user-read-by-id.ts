import { User } from "@user/domain/entities/user.entity";
import { UserRepository } from "@user/domain/repositories/user.repository";

export class UserReadById {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<User | null> {
    const user: User | null = await this.repository.readById(id);

    if (!user) {
      return null;
    }

    return user;
  }
}
