import { useCallback } from "react";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useAuth } from "@clerk/clerk-react";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutForm({ invoiceId }) {
    const { getToken } = useAuth();

    const fetchClientSecret = useCallback(async () => {
        const token = await getToken();

        const res = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/payments/create-checkout-session`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ invoiceId }),
            }
        );

        const data = await res.json();
        return data.clientSecret;
    }, [invoiceId, getToken]);

    return (
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
        >
            <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    );
}
