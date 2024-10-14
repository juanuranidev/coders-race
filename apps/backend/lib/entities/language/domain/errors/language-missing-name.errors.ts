export class MissingLanguageNameError extends Error {
  constructor() {
    super('Language name is required');
    this.name = 'MissingLanguageNameError';
  }
}
