import { LanguageType } from "./language.type";
import { UserType } from "./user.type";

export type RaceType = {
  id?: number;
  code: string;
  cpm: number;
  timeInMs: number;
  user?: UserType;
  language?: LanguageType | string;
};
