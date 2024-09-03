import { languages } from "@language/infraestructure/dbs/postgres/schemas/language.schemas";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const codes = pgTable("codes", {
  id: serial("id").primaryKey().notNull(),
  text: varchar("text").notNull(),
  language: integer("exercise_id")
    .notNull()
    .references(() => languages.id),
});
