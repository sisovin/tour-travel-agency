import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const Review = pgTable('reviews', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => User.id),
  rating: integer('rating').notNull(),
  comment: text('comment').notNull(),
});

export type Review = InferModel<typeof Review>;
