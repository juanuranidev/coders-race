import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export interface PostgresUser {
  id: string;
  name: string;
  image: string;
  authId: string;
  githubId: string;
  githubUsername: string;
}

export const users = pgTable('users', {
  id: uuid('id').primaryKey().notNull().unique(),
  name: varchar('name', { length: 256 }).notNull(),
  image: varchar('image', { length: 256 }).notNull(),
  authId: varchar('auth_id', { length: 256 }).notNull(),
  githubId: varchar('github_id', { length: 256 }).notNull(),
  githubUsername: varchar('github_username', { length: 256 }).notNull(),
});
