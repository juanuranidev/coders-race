import { codes } from "@code/infrastructure/dbs/postgres/schemas/code.schemas";
import { languages } from "@language/infrastructure/dbs/postgres/schemas/language.schemas";
import { pgTable, integer, uuid } from "drizzle-orm/pg-core";

export interface PostgresRace {
  id: string;
  code: {
    id: number;
    text: string;
  } | null;
  cpm: number;
  timeInMS: number;
  language: {
    id: number;
    name: string;
  } | null;
}

export const races = pgTable("races", {
  id: uuid("id").primaryKey().notNull(),
  code: integer("code_id")
    .notNull()
    .references(() => codes.id),
  cpm: integer("cpm").notNull(),
  timeInMS: integer("time_in_ms").notNull(),
  language: integer("language_id")
    .notNull()
    .references(() => languages.id),
});
