export class CodeNotFoundError extends Error {
  constructor() {
    super('Code not found');
    this.name = 'CodeNotFoundError';
  }
}
