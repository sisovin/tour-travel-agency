import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const Booking = pgTable('bookings', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => User.id),
  type: text('type').notNull(), // hotel, flight, tour
  referenceId: integer('reference_id').notNull(), // hotelId, flightId, tourId
  status: text('status').notNull(), // pending, confirmed, cancelled
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Booking = InferModel<typeof Booking>;
