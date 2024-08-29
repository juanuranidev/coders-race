export class LoginUserDto {
  private constructor(
    public readonly name: string,
    public readonly image: string,
    public readonly githubUsername: string,
    public readonly githubId: string
  ) {}

  static create(props: { [key: string]: any }): [string?, LoginUserDto?] {
    const { name, image, githubUsername, githubId } = props;

    if (!name) return ["Name is required", undefined];
    if (!image) return ["Image is required", undefined];
    if (!githubUsername) return ["GithubUsername is required", undefined];
    if (!githubId) return ["GithubId is required", undefined];

    return [undefined, new LoginUserDto(name, image, githubUsername, githubId)];
  }
}
