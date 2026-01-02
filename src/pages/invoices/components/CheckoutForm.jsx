import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";
import { useCreateCheckoutSessionMutation } from "@/lib/redux/query";

const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutForm({ invoiceId }) {
    const [createCheckoutSession] = useCreateCheckoutSessionMutation();

    const fetchClientSecret = useCallback(async () => {
        const result = await createCheckoutSession(invoiceId).unwrap();
        return result.clientSecret;
    }, [invoiceId, createCheckoutSession]);

    return (
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    );
}
