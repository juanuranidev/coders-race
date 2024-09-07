import {
  languages,
  LanguagePostgres,
} from "@language/infraestructure/dbs/postgres/schemas/language.schemas";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export interface CodePostgres {
  id: number;
  text: string;
  language: LanguagePostgres | null;
}

export const codes = pgTable("codes", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text").notNull(),
  language: integer("language_id")
    .notNull()
    .references(() => languages.id),
});
