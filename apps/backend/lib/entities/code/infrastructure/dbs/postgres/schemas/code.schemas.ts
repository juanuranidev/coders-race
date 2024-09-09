import {
  languages,
  PostgresLanguage,
} from "@language/infrastructure/dbs/postgres/schemas/language.schemas";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export interface PostgresCode {
  id: number;
  text: string;
  language: {
    id: number;
    name: string;
  } | null;
}

export const codes = pgTable("codes", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text").notNull(),
  language: integer("language_id")
    .notNull()
    .references(() => languages.id),
});
