import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

export const createPaymentIntent = async (amount: number, currency: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return paymentIntent;
  } catch (error) {
    throw new Error('Failed to create payment intent');
  }
};

export const handlePaymentWebhook = async (event: Stripe.Event) => {
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // Handle successful payment here
      break;
    case 'payment_intent.payment_failed':
      const paymentFailedIntent = event.data.object as Stripe.PaymentIntent;
      // Handle failed payment here
      break;
    default:
      console.warn(`Unhandled event type ${event.type}`);
  }
};
