import { User } from '@user/domain/entities/user.entity';
import { UserRepository } from '@user/domain/repositories/user.repository';

export class UserReadProfile {
  constructor(private repository: UserRepository) { }

  async run(userId: string): Promise<User> {
    return await this.repository.readProfile(userId);
  }
}
