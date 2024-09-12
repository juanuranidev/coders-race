import ENVS from "../config/envs/envs";
import { RaceCreate } from "@race/application/race-create/race-create";
import { RaceReadById } from "@race/application/race-read-by-id/race-read-by-id";
import { UserReadById } from "@user/application/user-read-by-id/user-read-by-id";
import { CodeReadById } from "@code/application/code-read-by-id/code-read-by-id";
import { LanguageReadAll } from "@language/application/language-read-all/language-read-all";
import { LanguageReadByName } from "@language/application/language-read-by-name/language-read-by-name";
import { UserReadByGithubId } from "@user/application/user-read-by-github-id/user-read-by-github-id";
import { RacePostgresRepository } from "@race/infrastructure/repositories/race-postgres.repository";
import { CodePostgresRepository } from "@code/infrastructure/repositories/code-postgres.repository";
import { UserReadAllLeaderboard } from "@user/application/users-read-all-leaderboard/user-read-all-leaderboard";
import { UserPostgresRepository } from "@user/infrastructure/repositories/user-postgres.repository";
import { CodeReadRandomByLanguage } from "@code/application/code-read-random-by-language/code-read-random-by-language";
import { LanguagePostgresRepository } from "@language/infrastructure/repositories/language-postgres.repository";

const codeRepositoryPostgres = new CodePostgresRepository(ENVS.POSTGRES_URL);
const raceRepositoryPostgres = new RacePostgresRepository(ENVS.POSTGRES_URL);
const userRepositoryPostgres = new UserPostgresRepository(ENVS.POSTGRES_URL);
const languageRepositoryPostgres = new LanguagePostgresRepository(
  ENVS.POSTGRES_URL
);

export const ServiceContainer = {
  code: {
    readById: new CodeReadById(codeRepositoryPostgres),
    readRandomByLanguageName: new CodeReadRandomByLanguage(
      codeRepositoryPostgres
    ),
  },
  language: {
    readAll: new LanguageReadAll(languageRepositoryPostgres),
    readByName: new LanguageReadByName(languageRepositoryPostgres),
  },
  race: {
    create: new RaceCreate(raceRepositoryPostgres),
    readById: new RaceReadById(raceRepositoryPostgres),
  },
  user: {
    readByGithubId: new UserReadByGithubId(userRepositoryPostgres),
    readById: new UserReadById(userRepositoryPostgres),
    readAllLeaderboard: new UserReadAllLeaderboard(userRepositoryPostgres),
  },
};
