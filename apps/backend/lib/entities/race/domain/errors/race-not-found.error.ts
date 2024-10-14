export class RaceNotFoundError extends Error {
  constructor() {
    super('Race not found');
    this.name = 'RaceNotFoundError';
  }
}
