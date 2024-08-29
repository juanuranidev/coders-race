import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface GetUsersLeaderboardInterface {
  execute(): Promise<UserEntity[]>;
}

export class GetUsersLeaderboard implements GetUsersLeaderboardInterface {
  constructor(public readonly repository: UserRepository) {}

  execute(): Promise<UserEntity[]> {
    return this.repository.getUsersLeaderboard();
  }
}
