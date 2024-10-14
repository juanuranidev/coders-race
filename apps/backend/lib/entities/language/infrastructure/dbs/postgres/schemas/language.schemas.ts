import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export interface PostgresLanguage {
  id: number;
  name: string;
}

export const languages = pgTable('languages', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name').notNull(),
});
