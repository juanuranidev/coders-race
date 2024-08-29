import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface GetUserLeaderboardInterface {
  execute(): Promise<UserEntity[] | undefined>;
}

export class GetUserLeaderboard implements GetUserLeaderboardInterface {
  constructor(public readonly repository: UserRepository) {}

  execute(): Promise<UserEntity[] | undefined> {
    return this.repository.getUsersLeaderboard();
  }
}
