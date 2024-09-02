import { Code } from "@code/domain/entities/code.entity";

export interface CodeRepository {
  create(code: Code): Promise<void>;
  readRandom(): Promise<Code>;
}
