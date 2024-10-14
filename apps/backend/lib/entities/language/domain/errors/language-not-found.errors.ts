export class LanguageNotFoundError extends Error {
  constructor() {
    super('Language not found');
    this.name = 'LanguageNotFoundError';
  }
}
