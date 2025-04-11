import { defineConfig } from 'drizzle-orm';
import { Pool } from 'pg';
import { config } from 'dotenv';

config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default defineConfig({
  connection: pool,
  migrations: {
    directory: './migrations',
  },
});
