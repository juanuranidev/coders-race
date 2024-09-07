import { Code } from "@code/domain/entities/code.entity";
import { CodeRepository } from "@code/domain/repositories/code.repository";

export class CodeReadById {
  constructor(private repository: CodeRepository) {}

  async run(codeId: number): Promise<Code> {
    return this.repository.readById(codeId);
  }
}
