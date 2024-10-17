import { Code } from "../code/code.interfaces";
import { Language } from "../language/language.interfaces";

export interface Race {
  id: string;
  cps: number | string;
  timeInMS: number;
  code: Code;
  language: Language;
  createdAt: Date;
  userId: string;
}
