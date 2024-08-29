import { UserEntity } from "../../entities/user.entity";
import { LoginUserDto } from "../../dtos/auth/login-user.dto";
import { AuthRepository } from "../../repositories/auth.repository";

export interface LoginInterface {
  execute(user: UserEntity): Promise<UserEntity>;
}

export class LoginUser implements LoginInterface {
  constructor(private readonly repository: AuthRepository) {}

  execute(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.repository.loginUser(loginUserDto);
  }
}
