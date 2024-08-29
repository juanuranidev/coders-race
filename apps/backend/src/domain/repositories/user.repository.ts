import { UserEntity } from "../entities/user.entity";

export abstract class UserRepository {
  abstract getById(id: number): Promise<UserEntity | undefined>;
  abstract getByGithubId(id: string): Promise<UserEntity | undefined>;
  abstract getUsersLeaderboard(): Promise<UserEntity[]>;
}
