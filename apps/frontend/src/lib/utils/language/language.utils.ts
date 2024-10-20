import { Language } from "lib/interfaces/language/language.interfaces";
import { LANGUAGES_CONSTANTS } from "lib/constants/language/language.constants";

export const getLanguageIcon = (language: Language | null): string => {
  if (!language) {
    return "";
  }

  switch (language.name) {
    case LANGUAGES_CONSTANTS.JAVASCRIPT.name:
      return LANGUAGES_CONSTANTS.JAVASCRIPT.image;
    case LANGUAGES_CONSTANTS.TYPESCRIPT.name:
      return LANGUAGES_CONSTANTS.TYPESCRIPT.image;
    case LANGUAGES_CONSTANTS.PYTHON.name:
      return LANGUAGES_CONSTANTS.PYTHON.image;
    default:
      return "";
  }
};

export const getLanguageIconByName = (name: string | undefined): string => {
  if (!name) {
    return "";
  }

  const language = LANGUAGES_CONSTANTS.LIST.find((language) => language.name === name);

  return language?.image || "";
};
