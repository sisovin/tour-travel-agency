import { Router } from 'express';
import { BookingController } from '../controllers/booking.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const bookingController = new BookingController();

router.post('/', authMiddleware, bookingController.createBooking.bind(bookingController));
router.put('/:id', authMiddleware, bookingController.updateBooking.bind(bookingController));
router.delete('/:id', authMiddleware, bookingController.cancelBooking.bind(bookingController));
router.get('/:id', authMiddleware, bookingController.getBooking.bind(bookingController));
router.get('/', authMiddleware, bookingController.getAllBookings.bind(bookingController));

export default router;
