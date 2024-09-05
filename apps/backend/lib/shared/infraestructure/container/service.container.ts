import { CodeCreate } from "@code/application/code-create/code-create";
import { CodeReadRandom } from "@code/application/code-read-random/code-read-random";
import { CodePostgresRepository } from "@code/infraestructure/repositories/code-postgres.repository";
import { LanguageReadAll } from "@language/application/language-read-all/language-read-all";
import { LanguageReadByName } from "@language/application/language-read-by-name/language-read-by-name";
import { LanguagePostgresRepository } from "@language/infraestructure/repositories/language-postgres.repository";
import { RaceCreate } from "@race/application/race-create/race-create";
import { RaceReadById } from "@race/application/race-read-by-id/race-read-by-id";
import { RacePostgresRepository } from "@race/infraestructure/repositories/race-postgres.repository";
import { UserReadByGithubId } from "@user/application/user-read-by-github-id/user-read-by-github-id";
import { UserReadById } from "@user/application/user-read-by-id/user-read-by-id";
import { UserReadAllLeaderboard } from "@user/application/users-read-all-leaderboard/user-read-all-leaderboard";
import { UserPostgresRepository } from "@user/infraestructure/repositories/user-postgres.repository";
import ENVS from "../config/envs/envs";

const codeRepositoryPostgres = new CodePostgresRepository(ENVS.POSTGRES_URL);
const raceRepositoryPostgres = new RacePostgresRepository(ENVS.POSTGRES_URL);
const userRepositoryPostgres = new UserPostgresRepository(ENVS.POSTGRES_URL);
const languageRepositoryPostgres = new LanguagePostgresRepository(
  ENVS.POSTGRES_URL
);

export const ServiceContainer = {
  code: {
    create: new CodeCreate(codeRepositoryPostgres),
    readRandom: new CodeReadRandom(codeRepositoryPostgres),
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
