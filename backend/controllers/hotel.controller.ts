import { Request, Response } from 'express';
import { Hotel } from '../models/hotel.model';
import { Room } from '../models/room.model';
import { Booking } from '../models/booking.model';

// Get list of hotels
export const getHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotels', error });
  }
};

// Get hotel details by ID
export const getHotelById = async (req: Request, res: Response) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotel details', error });
  }
};

// Check room availability
export const checkRoomAvailability = async (req: Request, res: Response) => {
  try {
    const { hotelId, startDate, endDate } = req.body;
    const rooms = await Room.findAll({
      where: {
        hotelId,
        availableFrom: { [Op.lte]: startDate },
        availableTo: { [Op.gte]: endDate },
      },
    });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Error checking room availability', error });
  }
};

// Book a room
export const bookRoom = async (req: Request, res: Response) => {
  try {
    const { hotelId, roomId, userId, startDate, endDate } = req.body;
    const booking = await Booking.create({
      hotelId,
      roomId,
      userId,
      startDate,
      endDate,
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error booking room', error });
  }
};
