import { Router } from 'express';
import { createPayment, paymentWebhook } from '../controllers/payment.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.post('/create-payment', authMiddleware, createPayment);
router.post('/webhook', paymentWebhook);

export default router;
