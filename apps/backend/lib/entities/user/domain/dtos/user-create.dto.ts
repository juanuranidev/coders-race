export class UserCreateDto {
  private constructor(
    public readonly name: string,
    public readonly image: string,
    public readonly authId: string,
    public readonly githubId: string,
    public readonly githubUsername: string
  ) {}

  static run(data: { [key: string]: any }): [string?, UserCreateDto?] {
    const { name, image, githubUsername, githubId, authId } = data;

    if (!name) return ["name parameter is required", undefined];
    if (!image) return ["image parameter is required", undefined];
    if (!authId) return ["authId parameter is required", undefined];
    if (!githubId) return ["githubId parameter is required", undefined];
    if (!githubUsername)
      return ["githubUsername parameter is required", undefined];

    return [
      undefined,
      new UserCreateDto(name, image, authId, githubId, githubUsername),
    ];
  }
}
