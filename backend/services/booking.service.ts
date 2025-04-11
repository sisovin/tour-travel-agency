import { Booking } from '../models/booking.model';
import { CreateBookingDTO, UpdateBookingDTO } from '../types/booking.types';
import db from '../config/db';

export class BookingService {
  public async createBooking(createBookingDTO: CreateBookingDTO): Promise<Booking> {
    const { userId, type, referenceId, status } = createBookingDTO;
    const newBooking = await db.insert(Booking).values({
      userId,
      type,
      referenceId,
      status,
    }).returning('*');
    return newBooking[0];
  }

  public async updateBooking(bookingId: number, updateBookingDTO: UpdateBookingDTO): Promise<Booking> {
    const { status } = updateBookingDTO;
    const updatedBooking = await db.update(Booking).set({
      status,
    }).where(Booking.id.eq(bookingId)).returning('*');
    return updatedBooking[0];
  }

  public async cancelBooking(bookingId: number): Promise<void> {
    await db.update(Booking).set({
      status: 'cancelled',
    }).where(Booking.id.eq(bookingId));
  }

  public async getBooking(bookingId: number): Promise<Booking> {
    const booking = await db.select().from(Booking).where(Booking.id.eq(bookingId));
    return booking[0];
  }

  public async getAllBookings(): Promise<Booking[]> {
    const bookings = await db.select().from(Booking);
    return bookings;
  }
}
