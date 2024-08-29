import { CustomError } from "../../domain/errors/custom.error";
import { GetRandomCode } from "../../domain/use-cases/code/get-random-code";
import { CodeRepository } from "../../domain/repositories/code.repository";
import { Request, Response } from "express";
import { GetLanguageByName } from "../../domain/use-cases/language/get-language-by-name";
import { LanguageRepository } from "../../domain/repositories/language.repository";

export class CodeController {
  constructor(
    private readonly codeRepository: CodeRepository,
    private readonly languageRepository: LanguageRepository
  ) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  };

  public getRandomCode = async (req: Request, res: Response) => {
    const { language } = req.query;
    if (!language) {
      return CustomError.badRequest("Language is required");
    }

    const languageEntity: any = await new GetLanguageByName(
      this.languageRepository
    )
      .execute(String(language))
      .catch((error) => this.handleError(error, res));

    return new GetRandomCode(this.codeRepository)
      .execute(languageEntity)
      .then((randomCode) => res.status(200).json(randomCode))
      .catch((error) => this.handleError(error, res));
  };
}
