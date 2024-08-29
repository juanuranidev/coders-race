export class CodeEntity {
  constructor(
    public id: number,
    public text: string,
    public language: number
  ) {}

  public static fromObject(object: { [key: string]: any }): CodeEntity {
    const { id, text, language } = object;

    if (!id) throw "id is required";
    if (!text) throw "text is required";
    if (!language) throw "language is required";

    return new CodeEntity(id, text, language);
  }
}
