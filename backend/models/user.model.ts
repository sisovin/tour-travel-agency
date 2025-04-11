import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const User = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').notNull(),
});

export type User = InferModel<typeof User>;
