import { CustomError } from "../../domain/errors/custom.error";
import { GetLanguages } from "../../domain/use-cases/language/get-languages";
import { Request, Response } from "express";
import { LanguageRepository } from "../../domain/repositories/language.repository";

export class LanguageController {
  constructor(private readonly languageRepository: LanguageRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  };

  public getLanguages = async (req: Request, res: Response) => {
    return new GetLanguages(this.languageRepository)
      .execute()
      .then((languages) => res.status(200).json(languages))
      .catch((error) => this.handleError(error, res));
  };
}
