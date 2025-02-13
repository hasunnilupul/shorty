import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const urls = pgTable(
  "urls",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    shortCode: varchar("short_code", { length: 6 }).notNull(),
    longUrl: varchar("long_url", { length: 256 }).notNull(),
    clicks: integer("clicks").default(0).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.shortCode),
  })
);
