import { Router } from 'express';
import { getHotels, getHotelById, checkRoomAvailability, bookRoom } from '../controllers/hotel.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { cacheMiddleware } from '../middleware/cache.middleware';

const router = Router();

router.get('/', cacheMiddleware, getHotels);
router.get('/:id', cacheMiddleware, getHotelById);
router.post('/availability', checkRoomAvailability);
router.post('/book', authMiddleware, bookRoom);

export default router;
