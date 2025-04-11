import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes';
import bookingRoutes from './routes/booking.routes';
import destinationRoutes from './routes/destination.routes';
import hotelRoutes from './routes/hotel.routes';
import flightRoutes from './routes/flight.routes';
import paymentRoutes from './routes/payment.routes';
import adminRoutes from './routes/admin.routes';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware';
import { rateLimitMiddleware } from './middleware/rateLimit.middleware';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(rateLimitMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admin', adminRoutes);

app.use(errorHandlerMiddleware);

export default app;
