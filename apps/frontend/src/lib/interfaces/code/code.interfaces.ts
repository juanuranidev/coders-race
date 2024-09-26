import { Language } from "../language/language.interfaces";

export interface Code {
  id: string;
  text: string;
  language?: Language;
}
