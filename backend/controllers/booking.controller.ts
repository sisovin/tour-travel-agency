import { Request, Response } from 'express';
import { BookingService } from '../services/booking.service';
import { CreateBookingDTO, UpdateBookingDTO } from '../types/booking.types';
import { ApiResponse } from '../types/api-response';

export class BookingController {
  private bookingService: BookingService;

  constructor() {
    this.bookingService = new BookingService();
  }

  public async createBooking(req: Request, res: Response): Promise<Response> {
    try {
      const createBookingDTO: CreateBookingDTO = req.body;
      const booking = await this.bookingService.createBooking(createBookingDTO);
      return res.status(201).json(new ApiResponse(true, 'Booking created successfully', booking));
    } catch (error) {
      return res.status(500).json(new ApiResponse(false, 'Failed to create booking', error.message));
    }
  }

  public async updateBooking(req: Request, res: Response): Promise<Response> {
    try {
      const bookingId = req.params.id;
      const updateBookingDTO: UpdateBookingDTO = req.body;
      const booking = await this.bookingService.updateBooking(bookingId, updateBookingDTO);
      return res.status(200).json(new ApiResponse(true, 'Booking updated successfully', booking));
    } catch (error) {
      return res.status(500).json(new ApiResponse(false, 'Failed to update booking', error.message));
    }
  }

  public async cancelBooking(req: Request, res: Response): Promise<Response> {
    try {
      const bookingId = req.params.id;
      await this.bookingService.cancelBooking(bookingId);
      return res.status(200).json(new ApiResponse(true, 'Booking cancelled successfully'));
    } catch (error) {
      return res.status(500).json(new ApiResponse(false, 'Failed to cancel booking', error.message));
    }
  }

  public async getBooking(req: Request, res: Response): Promise<Response> {
    try {
      const bookingId = req.params.id;
      const booking = await this.bookingService.getBooking(bookingId);
      return res.status(200).json(new ApiResponse(true, 'Booking retrieved successfully', booking));
    } catch (error) {
      return res.status(500).json(new ApiResponse(false, 'Failed to retrieve booking', error.message));
    }
  }

  public async getAllBookings(req: Request, res: Response): Promise<Response> {
    try {
      const bookings = await this.bookingService.getAllBookings();
      return res.status(200).json(new ApiResponse(true, 'Bookings retrieved successfully', bookings));
    } catch (error) {
      return res.status(500).json(new ApiResponse(false, 'Failed to retrieve bookings', error.message));
    }
  }
}
