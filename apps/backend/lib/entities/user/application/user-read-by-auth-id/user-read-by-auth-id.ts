import { User } from '@user/domain/entities/user.entity';
import { UserRepository } from '@user/domain/repositories/user.repository';

export class UserReadByAuthId {
  constructor(private repository: UserRepository) { }

  async run(authId: string): Promise<User | null> {
    const user: User | null = await this.repository.readByAuthId(authId);

    if (!user) {
      return null;
    }

    return user;
  }
}
