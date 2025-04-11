import { Request, Response } from 'express';
import { Flight } from '../models/flight.model';
import { Booking } from '../models/booking.model';
import { User } from '../models/user.model';
import { createFlightBooking, searchFlights } from '../services/flight.service';

export const searchFlightsController = async (req: Request, res: Response) => {
  try {
    const { from, to, departureDate, returnDate, passengers } = req.query;
    const flights = await searchFlights({
      from: from as string,
      to: to as string,
      departureDate: departureDate as string,
      returnDate: returnDate as string,
      passengers: parseInt(passengers as string, 10),
    });
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Error searching for flights', error });
  }
};

export const bookFlightController = async (req: Request, res: Response) => {
  try {
    const { flightId, userId, passengers } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    const booking = await createFlightBooking({
      flight,
      user,
      passengers,
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error booking flight', error });
  }
};
