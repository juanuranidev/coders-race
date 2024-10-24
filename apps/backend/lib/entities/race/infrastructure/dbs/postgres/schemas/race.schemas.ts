import { users } from "@user/infrastructure/dbs/postgres/schemas/user.schemas";
import { codes } from "@code/infrastructure/dbs/postgres/schemas/code.schemas";
import { languages } from "@language/infrastructure/dbs/postgres/schemas/language.schemas";
import {
  uuid,
  pgTable,
  integer,
  decimal,
  timestamp,
} from "drizzle-orm/pg-core";

export interface PostgresRace {
  id: string;
  code: {
    id: number;
    text: string;
  } | null;
  cps: number | string;
  timeInMS: number;
  language: {
    id: number;
    name: string;
  } | null;
  createdAt: Date;
  userId: string;
}

export const races = pgTable("races", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  code: integer("code_id")
    .notNull()
    .references(() => codes.id),
  cps: decimal("cps", { precision: 5, scale: 2 }).notNull(),
  timeInMS: integer("time_in_ms").notNull(),
  language: integer("language_id")
    .notNull()
    .references(() => languages.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
});
