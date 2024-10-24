import { CodeId } from "@code/domain/values-objects/code-id.value-object";
import { CodeText } from "@code/domain/values-objects/code-text.value-object";
import { Language } from "@language/domain/entities/language.entity";

export class Code {
  id: CodeId;
  text: CodeText;
  language: Language;

  constructor(id: number, text: string, language: Language) {
    this.id = new CodeId(id);
    this.text = new CodeText(text);
    this.language = language;
  }
  public getId(): number {
    return this.id.value;
  }

  public getText(): string {
    return this.text.value;
  }

  public getLanguage(): Language {
    return this.language;
  }

  public mapToPrimitives() {
    return {
      id: this.id.value,
      text: this.text.value,
      language: this.language.mapToPrimitives(),
    };
  }
}
