import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../config/jwt';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  const token = authHeader.split(' ')[1];
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ message: 'Invalid access token' });
  }

  req.user = payload;
  next();
}
