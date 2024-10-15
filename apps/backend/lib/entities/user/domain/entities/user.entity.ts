import { UserId } from '@user/domain/values-objects/user-id.value-object';
import { UserName } from '@user/domain/values-objects/user-name.value-object';
import { UserImage } from '@user/domain/values-objects/user-image.value-object';
import { UserAuthId } from '../values-objects/user-auth-id.value-objects';
import { UserGithubId } from '@user/domain/values-objects/user-github-id.value-object';
import { UserAverageCPS } from '../values-objects/user-average-cps.value-objects';
import { UserHighestCPS } from '@user/domain/values-objects/user-total-time-in-races.value-objects';
import { UserTopLanguage } from '../values-objects/user-top-language.value-objects';
import { UserGithubUsername } from '@user/domain/values-objects/user-github-username.value-object';
import { UserRacesCompleted } from '@user/domain/values-objects/user-races-completed.value-objects';
import { UserTotalTimeInRaces } from '@user/domain/values-objects/user-highest-cps.value-objects';

export class User {
  private id: UserId;
  private name: UserName;
  private image: UserImage;
  private authId: UserAuthId;
  private githubId: UserGithubId;
  private githubUsername: UserGithubUsername;
  private racesCompleted?: UserRacesCompleted;
  private totalTimeInRaces?: UserTotalTimeInRaces;
  private highestCPS?: UserHighestCPS;
  private topLanguage?: UserTopLanguage;
  private averageCPS?: UserAverageCPS;

  constructor(
    id: string,
    name: string,
    image: string,
    authId: string,
    githubId: string,
    githubUsername: string,
    racesCompleted?: number,
    totalTimeInRaces?: number,
    highestCPS?: number,
    averageCPS?: number
  ) {
    this.id = new UserId(id);
    this.name = new UserName(name);
    this.image = new UserImage(image);
    this.authId = new UserAuthId(authId);
    this.githubId = new UserGithubId(githubId);
    this.githubUsername = new UserGithubUsername(githubUsername);

    if (racesCompleted) {
      this.racesCompleted = new UserRacesCompleted(racesCompleted);
    }

    if (totalTimeInRaces) {
      this.totalTimeInRaces = new UserTotalTimeInRaces(totalTimeInRaces);
    }
    if (highestCPS) {
      this.highestCPS = new UserHighestCPS(highestCPS);
    }
    if (averageCPS) {
      this.averageCPS = new UserAverageCPS(averageCPS);
    }
  }

  public getId(): string {
    return this.id.value;
  }

  public getName(): string {
    return this.name.value;
  }

  public setName(value: string): void {
    this.name = new UserName(value);
  }

  public getImage(): string {
    return this.image.value;
  }

  public getGithubUsername(): string {
    return this.githubUsername.value;
  }

  public getGithubId(): string {
    return this.githubId.value;
  }

  public getAuthId(): string {
    return this.authId.value;
  }

  public getRacesCompleted(): number | null {
    return this?.racesCompleted?.value ?? null;
  }

  public setRacesCompleted(value: number): void {
    this.racesCompleted = new UserRacesCompleted(value);
  }

  public getTotalTimeInRaces(): number | null {
    return this?.totalTimeInRaces?.value ?? null;
  }

  public setTotalTimeInRaces(value: number): void {
    this.totalTimeInRaces = new UserTotalTimeInRaces(value);
  }

  public getHighestCPS(): number | null {
    return this?.highestCPS?.value ?? null;
  }

  public setHighestCPS(value: number): void {
    this.highestCPS = new UserHighestCPS(value);
  }

  public getTopLanguage(): string | null {
    return this.topLanguage?.value ?? null;
  }

  public setTopLanguage(value: string): void {
    this.topLanguage = new UserTopLanguage(value);
  }

  public getAverageCPS(): number | null {
    return this?.averageCPS?.value ?? null;
  }

  public setAverageCPS(value: number): void {
    this.averageCPS = new UserAverageCPS(value);
  }

  public mapToPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      image: this.image.value,
      authId: this.authId.value,
      githubId: this.githubId.value,
      githubUsername: this.githubUsername.value,
      racesCompleted: this?.racesCompleted?.value ?? null,
      totalTimeInRaces: this?.totalTimeInRaces?.value ?? null,
      highestCPS: this?.highestCPS?.value ?? null,
      topLanguage: this.topLanguage?.value ?? null,
      averageCPS: this?.averageCPS?.value ?? null,
    };
  }
}
