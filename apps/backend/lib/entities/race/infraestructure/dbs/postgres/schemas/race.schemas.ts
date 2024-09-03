import { codes } from "@code/infraestructure/dbs/postgres/schemas/code.schemas";
import { languages } from "@language/infraestructure/dbs/postgres/schemas/language.schemas";
import { pgTable, integer, uuid } from "drizzle-orm/pg-core";

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
