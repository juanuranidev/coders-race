import { Code } from "@code/domain/entities/code.entity";
import { CodeRepository } from "@code/domain/repositories/code.repository";

export class CodeReadRandom {
  constructor(private repository: CodeRepository) {}

  async run(): Promise<Code> {
    return this.repository.readRandom();
  }
}
