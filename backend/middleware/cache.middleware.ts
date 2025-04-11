import { Request, Response, NextFunction } from 'express';
import redisClient from '../config/redis';

export async function cacheMiddleware(req: Request, res: Response, next: NextFunction) {
  const key = req.originalUrl;

  try {
    const cachedData = await redisClient.get(key);
    if (cachedData) {
      return res.status(200).json(JSON.parse(cachedData));
    }
    res.sendResponse = res.send;
    res.send = (body) => {
      redisClient.set(key, JSON.stringify(body), 'EX', 3600);
      res.sendResponse(body);
    };
    next();
  } catch (error) {
    console.error('Redis error:', error);
    next();
  }
}
