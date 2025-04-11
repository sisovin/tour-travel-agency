import { Request, Response } from 'express';
import { getAdminDashboardStats, banUserById } from '../services/admin.service';

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const stats = await getAdminDashboardStats();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch dashboard stats', error });
  }
};

export const banUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    await banUserById(userId);
    res.status(200).json({ message: 'User banned successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to ban user', error });
  }
};
