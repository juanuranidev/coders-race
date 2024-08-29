export class LanguageEntity {
  constructor(public id: number, public name: string) {}

  public static fromObject(object: { [key: string]: any }): LanguageEntity {
    const { name, id } = object;

    if (!id) throw "id is required";
    if (!name) throw "name is required";

    return new LanguageEntity(id, name);
  }
}
