import { Router } from 'express';
import { getAllDestinations, getDestinationById, createDestination, updateDestination, deleteDestination } from '../controllers/destination.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { cacheMiddleware } from '../middleware/cache.middleware';

const router = Router();

router.get('/', cacheMiddleware, getAllDestinations);
router.get('/:id', cacheMiddleware, getDestinationById);
router.post('/', authMiddleware, createDestination);
router.put('/:id', authMiddleware, updateDestination);
router.delete('/:id', authMiddleware, deleteDestination);

export default router;
