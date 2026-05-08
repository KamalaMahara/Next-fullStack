import { sql } from "drizzle-orm";
import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const recipesTable = pgTable("recipes", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull().unique(),
  description: text("description"),
  subtitle: varchar("subtitle", { length: 100 }).notNull(),
  createdAt: timestamp("createdAt").default(sql`current_timestamp`).notNull(),
  updatedAt: timestamp("updatedAt").default(sql`current_timestamp`).notNull(),
});
