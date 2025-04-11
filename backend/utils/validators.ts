import Joi from 'joi';
import { z } from 'zod';

// User validation schema using Joi
export const userSchemaJoi = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('admin', 'customer').required(),
});

// Booking validation schema using Joi
export const bookingSchemaJoi = Joi.object({
  userId: Joi.string().required(),
  hotelId: Joi.string().optional(),
  flightId: Joi.string().optional(),
  tourId: Joi.string().optional(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  status: Joi.string().valid('pending', 'confirmed', 'cancelled').required(),
});

// Destination validation schema using Joi
export const destinationSchemaJoi = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
});

// User validation schema using Zod
export const userSchemaZod = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['admin', 'customer']),
});

// Booking validation schema using Zod
export const bookingSchemaZod = z.object({
  userId: z.string(),
  hotelId: z.string().optional(),
  flightId: z.string().optional(),
  tourId: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  status: z.enum(['pending', 'confirmed', 'cancelled']),
});

// Destination validation schema using Zod
export const destinationSchemaZod = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
});
