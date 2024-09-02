import { LanguageId } from "@language/domain/values-objects/language-id.value-object";
import { LanguageName } from "@language/domain/values-objects/language-name.value-object";

export class Language {
  private id: LanguageId;
  private name: LanguageName;

  constructor(id: number, name: string) {
    this.id = new LanguageId(id);
    this.name = new LanguageName(name);
  }

  public mapToPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
    };
  }

  public getId(): number {
    return this.id.value;
  }
  public getName(): string {
    return this.name.value;
  }
}
