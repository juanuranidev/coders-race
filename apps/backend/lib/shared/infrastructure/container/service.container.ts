import ENVS from "../config/envs/envs";
import { RaceCreate } from "@race/application/race-create/race-create";
import { UuidAdapter } from "@shared/infrastructure/adapters/uuid.adapter";
import { RaceReadById } from "@race/application/race-read-by-id/race-read-by-id";
import { UserReadById } from "@user/application/user-read-by-id/user-read-by-id";
import { UserReadProfile } from "@user/application/user-read-profile/user-read-profile";
import { LanguageReadAll } from "@language/application/language-read-all/language-read-all";
import { UserReadOrCreate } from "@user/application/user-read-or-create/user-read-or-create";
import { RaceReadByUserId } from "@race/application/race-read-by-user-id/race-read-by-user-id";
import { UserReadByAuthId } from "@user/application/user-read-by-auth-id/user-read-by-auth-id";
import { LanguageReadByName } from "@language/application/language-read-by-name/language-read-by-name";
import { UserReadLeaderboard } from "@user/application/users-read-leaderboard/user-read-leaderboard";
import { UserPostgresRepository } from "@user/infrastructure/repositories/user-postgres.repository";
import { RacePostgresRepository } from "@race/infrastructure/repositories/race-postgres.repository";
import { CodePostgresRepository } from "@code/infrastructure/repositories/code-postgres.repository";
import { CodeReadRandomByLanguage } from "@code/application/code-read-random-by-language/code-read-random-by-language";
import { LanguagePostgresRepository } from "@language/infrastructure/repositories/language-postgres.repository";

// Repositories
const codeRepositoryPostgres = new CodePostgresRepository(ENVS.POSTGRES_URL);
const raceRepositoryPostgres = new RacePostgresRepository(ENVS.POSTGRES_URL);
const userRepositoryPostgres = new UserPostgresRepository(ENVS.POSTGRES_URL);
const languageRepositoryPostgres = new LanguagePostgresRepository(
  ENVS.POSTGRES_URL
);

// Adapters
const uuidAdapter = new UuidAdapter();

export const ServiceContainer = {
  code: {
    readRandomByLanguageName: new CodeReadRandomByLanguage(
      codeRepositoryPostgres,
      new LanguageReadByName(languageRepositoryPostgres)
    ),
  },
  language: {
    readAll: new LanguageReadAll(languageRepositoryPostgres),
    readByName: new LanguageReadByName(languageRepositoryPostgres),
  },
  race: {
    create: new RaceCreate(
      raceRepositoryPostgres,
      uuidAdapter,
      new LanguageReadByName(languageRepositoryPostgres),
      codeRepositoryPostgres,
      new UserReadById(userRepositoryPostgres)
    ),
    readById: new RaceReadById(raceRepositoryPostgres),
    readByUserId: new RaceReadByUserId(raceRepositoryPostgres),
  },
  user: {
    readProfile: new UserReadProfile(
      userRepositoryPostgres,
      new UserReadById(userRepositoryPostgres)
    ),
    readByAuthId: new UserReadByAuthId(userRepositoryPostgres),
    readOrCreate: new UserReadOrCreate(
      userRepositoryPostgres,
      uuidAdapter,
      new UserReadByAuthId(userRepositoryPostgres)
    ),
    readById: new UserReadById(userRepositoryPostgres),
    readLeaderboard: new UserReadLeaderboard(userRepositoryPostgres),
  },
};
