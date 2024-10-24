import { v4 as uuidv4 } from "uuid";

export class UuidAdapter {
  async generate(): Promise<string> {
    return uuidv4();
  }
}
