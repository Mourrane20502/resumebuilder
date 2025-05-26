import {
  boolean,
  integer,
  json,
  pgTable,
  text,
  uuid,
} from "drizzle-orm/pg-core";

export const pricingPlans = pgTable("pricing_plans", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  features: json("features").notNull(),
  cta: text("cta").notNull(),
  popular: boolean("popular").default(false),
});
