import { Code } from '@code/domain/entities/code.entity';
import { Language } from '@language/domain/entities/language.entity';

export interface CodeRepository {
  readById(codeId: number): Promise<Code | null>;
  readRandomByLanguage(language: Language): Promise<Code | null>;
}
