import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const Destination = pgTable('destinations', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
});

export type Destination = InferModel<typeof Destination>;
