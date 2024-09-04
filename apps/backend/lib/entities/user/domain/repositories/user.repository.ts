import { User } from "@user/domain/entities/user.entity";

export interface UserRepository {
  readById(userId: string): Promise<User>;
  readByGithubId(githubId: string): Promise<User>;
  readAllUsersLeaderboard(): Promise<User[]>;
}
