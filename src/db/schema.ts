import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const User = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  username: text("username").notNull(),
  name: text("name").notNull(),
  fullName: text("full_name").notNull(),

  createdAt: integer("created_at", { mode: "number" })
    .$defaultFn(() => Date.now())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "number" })
    .$defaultFn(() => Date.now())
    .notNull(),
  deletedAt: integer("deleted_at", { mode: "number" }),
});
