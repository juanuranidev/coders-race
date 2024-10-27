export interface User {
  id?: string;
  name: string;
  image: string;
  authId?: string;
  githubId?: string;
  highestCPS?: number;
  averageCPS?: number;
  topLanguage?: string;
  githubUsername?: string;
  racesCompleted?: number;
  rankingPosition?: number;
  totalTimeInRaces?: number;
}
