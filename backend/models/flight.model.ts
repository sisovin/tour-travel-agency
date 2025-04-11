import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const Flight = pgTable('flights', {
  id: serial('id').primaryKey(),
  airline: text('airline').notNull(),
  departure: text('departure').notNull(),
  arrival: text('arrival').notNull(),
  price: integer('price').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Flight = InferModel<typeof Flight>;
