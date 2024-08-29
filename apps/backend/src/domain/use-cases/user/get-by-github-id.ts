import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface GetUserByGithubIdInterface {
  execute(id: string): Promise<UserEntity | undefined>;
}

export class GetUserByGithubId implements GetUserByGithubIdInterface {
  constructor(private readonly repository: UserRepository) {}

  execute(id: string): Promise<UserEntity | undefined> {
    return this.repository.getByGithubId(id);
  }
}
