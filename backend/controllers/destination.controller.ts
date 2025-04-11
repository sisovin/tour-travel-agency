import { Request, Response } from 'express';
import db from '../config/db';
import { Destination } from '../models/destination.model';

export const getAllDestinations = async (req: Request, res: Response) => {
  try {
    const destinations = await db.select().from(Destination);
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destinations', error });
  }
};

export const getDestinationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const destination = await db.select().from(Destination).where({ id }).first();
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(destination);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination', error });
  }
};

export const createDestination = async (req: Request, res: Response) => {
  try {
    const { name, description, image } = req.body;
    const newDestination = await db.insert(Destination).values({ name, description, image }).returning('*');
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ message: 'Error creating destination', error });
  }
};

export const updateDestination = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;
    const updatedDestination = await db.update(Destination).set({ name, description, image }).where({ id }).returning('*');
    if (!updatedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(updatedDestination);
  } catch (error) {
    res.status(500).json({ message: 'Error updating destination', error });
  }
};

export const deleteDestination = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedDestination = await db.delete().from(Destination).where({ id }).returning('*');
    if (!deletedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(deletedDestination);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting destination', error });
  }
};
