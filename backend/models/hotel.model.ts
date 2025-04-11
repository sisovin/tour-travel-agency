import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const Hotel = pgTable('hotels', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  location: text('location').notNull(),
  rooms: integer('rooms').notNull(),
  price: integer('price').notNull(),
});

export type Hotel = InferModel<typeof Hotel>;
