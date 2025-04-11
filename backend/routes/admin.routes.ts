import { Router } from 'express';
import { getDashboardStats, banUser } from '../controllers/admin.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/dashboard-stats', authMiddleware, getDashboardStats);
router.post('/ban-user/:userId', authMiddleware, banUser);

export default router;
