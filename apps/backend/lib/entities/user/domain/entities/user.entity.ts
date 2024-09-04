import { UserId } from "@user/domain/values-objects/user-id.value-object";
import { UserName } from "@user/domain/values-objects/user-name.value-object";
import { UserImage } from "@user/domain/values-objects/user-image.value-object";
import { UserGithubId } from "@user/domain/values-objects/user-github-id.value-object";
import { UserGithubUsername } from "@user/domain/values-objects/user-github-username.value-object";

export class User {
  private id: UserId;
  private name: UserName;
  private image: UserImage;
  private githubUsername: UserGithubUsername;
  private githubId: UserGithubId;

  constructor(
    id: string,
    name: string,
    image: string,
    githubUsername: string,
    githubId: string
  ) {
    this.id = new UserId(id);
    this.name = new UserName(name);
    this.image = new UserImage(image);
    this.githubUsername = new UserGithubUsername(githubUsername);
    this.githubId = new UserGithubId(githubId);
  }

  public mapToPrimitives() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      githubUsername: this.githubUsername,
      githubId: this.githubId,
    };
  }
}
