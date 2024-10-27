import { CodeNotFoundError } from "@code/domain/errors/code-not-found";
import { RaceNotFoundError } from "@race/domain/errors/race-not-found.error";
import { UserNotFoundError } from "@user/domain/errors/user-not-found.errors";
import { CodeMissingIdError } from "@code/domain/errors/code-missing-id.errors";
import { RaceMissingIdError } from "@race/domain/errors/race-missing-name.errors";
import { CodeTextTooLongError } from "@code/domain/errors/code-text-too-long.error";
import { UserNameTooLongError } from "@user/domain/errors/user-name-too-long.errors";
import { InvalidArgumentError } from "./invalid-argument.error";
import { UserImageTooLongError } from "@user/domain/errors/user-image-too-long.errors";
import { LanguageNotFoundError } from "@language/domain/errors/language-not-found.errors";
import { UserAuthIdTooLongError } from "@user/domain/errors/user-auth-id-too-long.errors";
import { LanguageMissingNameError } from "@language/domain/errors/language-missing-name.errors";
import { UserGithubIdTooLongError } from "@user/domain/errors/user-github-id-too-long.errors";
import { UserGithubUsernameTooLongError } from "@user/domain/errors/user-github-username-too-long.errors";

interface ErrorInfo {
  statusCode: number;
  message: string;
}

export const errorCatalog: Record<string, ErrorInfo> = {
  [CodeNotFoundError.name]: { statusCode: 404, message: "Code not found" },
  [CodeMissingIdError.name]: { statusCode: 400, message: "Missing code id" },
  [CodeTextTooLongError.name]: {
    statusCode: 400,
    message: "Code text is too long",
  },
  [RaceMissingIdError.name]: { statusCode: 400, message: "Missing race id" },
  [RaceNotFoundError.name]: { statusCode: 404, message: "Race not found" },
  [LanguageNotFoundError.name]: {
    statusCode: 404,
    message: "Language not found",
  },
  [LanguageMissingNameError.name]: {
    statusCode: 400,
    message: "Missing language name",
  },
  [UserNotFoundError.name]: { statusCode: 404, message: "User not found" },
  [UserAuthIdTooLongError.name]: {
    statusCode: 400,
    message: "Auth ID cannot be longer than 256 characters",
  },
  [UserGithubIdTooLongError.name]: {
    statusCode: 400,
    message: "Github ID cannot be longer than 256 characters",
  },
  [UserGithubUsernameTooLongError.name]: {
    statusCode: 400,
    message: "Github username cannot be longer than 256 characters",
  },
  [UserNameTooLongError.name]: {
    statusCode: 400,
    message: "Name cannot be longer than 256 characters",
  },
  [UserImageTooLongError.name]: {
    statusCode: 400,
    message: "Image cannot be longer than 256 characters",
  },
  [InvalidArgumentError.name]: { statusCode: 400, message: "Invalid argument" },
};

export function getErrorInfo(error: Error): ErrorInfo {
  return (
    errorCatalog[error.constructor.name] || {
      statusCode: 500,
      message: "Internal Server Error",
    }
  );
}
