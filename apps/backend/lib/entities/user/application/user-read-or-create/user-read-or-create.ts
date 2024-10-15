import { User } from '@user/domain/entities/user.entity';
import { UserRepository } from '@user/domain/repositories/user.repository';
import { UserCreateDto } from '@user/domain/dtos/user-create.dto';
import { UuidAdapter } from '@shared/infrastructure/adapters/uuid.adapter';

export class UserReadOrCreate {
    constructor(
        private repository: UserRepository,
        private uuidAdapter: UuidAdapter
    ) { }

    async run(userDto: UserCreateDto): Promise<User> {
        const userFound: User | null = await this.repository.readByAuthId(
            userDto.authId
        );
        if (userFound) {
            return userFound;
        }

        const uuid = await this.uuidAdapter.generate();

        const newUser = new User(
            uuid,
            userDto.name,
            userDto.image,
            userDto.authId,
            userDto.githubId,
            userDto.githubUsername
        );

        return this.repository.create(newUser);
    }
}
