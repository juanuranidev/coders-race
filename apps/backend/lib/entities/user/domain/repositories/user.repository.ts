import { User } from "@user/domain/entities/user.entity";

export interface UserRepository {
  create(user: User): Promise<User>;
  readProfile(user: User): Promise<User>;
  readById(userId: string): Promise<User | null>;
  readByAuthId(authId: string): Promise<User | null>;
  readLeaderboard(): Promise<User[]>;
}
