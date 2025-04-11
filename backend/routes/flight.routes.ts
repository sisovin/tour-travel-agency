import { Router } from 'express';
import { searchFlightsController, bookFlightController } from '../controllers/flight.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { cacheMiddleware } from '../middleware/cache.middleware';

const router = Router();

router.get('/search', cacheMiddleware, searchFlightsController);
router.post('/book', authMiddleware, bookFlightController);

export default router;
