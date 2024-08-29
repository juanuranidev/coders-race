import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

export interface GetUserByIdInterface {
  execute(id: number): Promise<UserEntity | undefined>;
}

export class GetUserById implements GetUserByIdInterface {
  constructor(private readonly repository: UserRepository) {}

  execute(id: number): Promise<UserEntity | undefined> {
    return this.repository.getById(id);
  }
}
