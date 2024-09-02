import { Language } from "@language/domain/entities/language.entity";
import { CodeText } from "lib/entities/code/domain/values-objects/code-text.value-object";

export class Code {
  text: CodeText;
  language: Language;

  constructor(text: string, language: Language) {
    this.text = new CodeText(text);
    this.language = language;
  }

  public mapToPrimitives() {
    return {
      text: this.text.value,
      language: this.language.mapToPrimitives,
    };
  }
}
