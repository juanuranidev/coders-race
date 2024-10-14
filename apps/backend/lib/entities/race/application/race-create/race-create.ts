import { Code } from '@code/domain/entities/code.entity';
import { Race } from '@race/domain/entities/race.entity';
import { User } from '@user/domain/entities/user.entity';
import { Language } from '@language/domain/entities/language.entity';
import { UuidAdapter } from '@shared/infrastructure/adapters/uuid.adapter';
import { CodeRepository } from '@code/domain/repositories/code.repository';
import { RaceRepository } from '@race/domain/repositories/race.repository';
import { UserRepository } from '@user/domain/repositories/user.repository';
import { CodeNotFoundError } from '@code/domain/errors/code-not-found';
import { UserNotFoundError } from '@user/domain/errors/user.errors';
import { LanguageRepository } from '@language/domain/repositories/language.repository';
import { LanguageNotFoundError } from '@language/domain/errors/language-not-found.errors';

export class RaceCreate {
  constructor(
    private repository: RaceRepository,
    private uuidAdapter: UuidAdapter,
    private codeRepository: CodeRepository,
    private languageRepository: LanguageRepository,
    private userRepository: UserRepository
  ) { }

  async run(
    cps: number,
    timeInMS: number,
    codeId: number,
    userId: string
  ): Promise<void> {
    const codeEntity: Code | null = await this.codeRepository.readById(codeId);
    if (!codeEntity) {
      throw new CodeNotFoundError();
    }

    const languageEntity: Language | null =
      await this.languageRepository.readByName(
        codeEntity!.getLanguage().getName()
      );
    if (!languageEntity) {
      throw new LanguageNotFoundError();
    }

    const userEntity: User | null = await this.userRepository.readById(userId);
    if (!userEntity) {
      throw new UserNotFoundError();
    }

    const uuid: string = await this.uuidAdapter.generate();

    const race: Race = new Race(uuid, cps, timeInMS, codeEntity, languageEntity, userEntity);

    return this.repository.create(race);
  }
}
