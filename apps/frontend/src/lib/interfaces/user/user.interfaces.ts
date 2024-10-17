export interface User {
  id: string;
  name: string;
  image: string;
  authId: string;
  githubId: string;
  averageCPS?: number;
  topLanguage?: string;
  githubUsername: string;
  racesCompleted?: number;
}
