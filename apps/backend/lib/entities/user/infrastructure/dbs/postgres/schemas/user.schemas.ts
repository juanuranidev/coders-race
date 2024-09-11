import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom(),
  name: varchar("name", { length: 256 }).notNull(),
  image: varchar("image", { length: 256 }).notNull(),
  githubUsername: varchar("github_username", { length: 256 }).notNull(),
  githubId: varchar("github_id", { length: 256 }).notNull(),
});
