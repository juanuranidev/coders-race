import { Code } from '@code/domain/entities/code.entity';
import { ServiceContainer } from '@shared/infrastructure/container/service.container';
import { CodeNotFoundError } from '@code/domain/errors/code-not-found';
import { MissingCodeIdError } from '@code/domain/errors/code-missing-id.errors';
import { LanguageNotFoundError } from '@language/domain/errors/language-not-found.errors';
import { MissingLanguageNameError } from '@language/domain/errors/language-missing-name.errors';
import { Response, Request, NextFunction } from 'express';

export class CodeController {
  async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const { codeId } = req.query;
      if (!codeId) {
        return res.status(400).json({ error: 'Missing codeId parameter' });
      }

      const codeEntity: Code = await ServiceContainer.code.readById.run(
        Number(codeId)
      );

      res.status(200).json(codeEntity.mapToPrimitives());
    } catch (error) {
      console.log(error);

      if (error instanceof MissingCodeIdError) {
        return res.status(400).json({ error: error.message });
      } else if (error instanceof CodeNotFoundError) {
        return res.status(404).json({ error: error.message });
      } else if (error instanceof MissingLanguageNameError) {
        return res.status(400).json({ error: error.message });
      } else if (error instanceof LanguageNotFoundError) {
        return res.status(404).json({ error: error.message });
      }
      next(error);
    }
  }
  async readRandomByLanguage(req: Request, res: Response, next: NextFunction) {
    try {
      const { languageName } = req.query;
      if (!languageName || typeof languageName !== 'string') {
        return res
          .status(400)
          .json({ error: 'missing languageName parameter' });
      }

      const codeEntity: Code =
        await ServiceContainer.code.readRandomByLanguageName.run(languageName);

      res.status(201).json(codeEntity.mapToPrimitives());
    } catch (error) {
      console.log(error);

      if (error instanceof MissingLanguageNameError) {
        return res.status(400).json({ error: error.message });
      } else if (error instanceof LanguageNotFoundError) {
        return res.status(404).json({ error: error.message });
      }

      next(error);
    }
  }
}
