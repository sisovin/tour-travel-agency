import { Request, Response } from 'express';
import Stripe from 'stripe';
import { createPaymentIntent, handlePaymentWebhook } from '../services/payment.service';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await createPaymentIntent(amount, currency);
    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
};

export const paymentWebhook = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    await handlePaymentWebhook(event);

    res.status(200).json({ received: true });
  } catch (error) {
    res.status(400).json({ error: 'Webhook error' });
  }
};
