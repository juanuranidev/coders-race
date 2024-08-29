export class UserEntity {
  constructor(
    public name: string,
    public image: string,
    public githubUsername: string,
    public githubId: string,
    public id: number,
    public averageCpm?: number,
    public races?: number,
    public mostLanguageUsed?: string
  ) {}

  public static fromObject(object: { [key: string]: any }): UserEntity {
    const {
      id,
      name,
      image,
      races,
      githubId,
      averageCpm,
      githubUsername,
      mostLanguageUsed,
    } = object;

    if (!name) throw "name is required";
    if (!image) throw "image is required";
    if (!githubUsername) throw "githubUsername is required";
    if (!githubId) throw "githubID is required";
    if (!id) throw "id is required";

    return new UserEntity(
      name,
      image,
      githubUsername,
      githubId,
      id,
      averageCpm,
      races,
      mostLanguageUsed
    );
  }
}
