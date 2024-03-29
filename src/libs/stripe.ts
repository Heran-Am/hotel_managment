import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = async () => {
  try {
    if (stripePromise === undefined) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
    }
    return await stripePromise;
  } catch (error) {
    console.error('Error initializing Stripe:', error);
    throw error; // Rethrow the error to propagate it further if needed
  }
};

