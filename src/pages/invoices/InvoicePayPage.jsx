import { useEffect } from "react";
import { useCreateCheckoutSessionMutation } from "@/lib/redux/query";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const InvoicePayPage = () => {
    const { id } = useParams();
    const [createCheckoutSession] =
        useCreateCheckoutSessionMutation();

    useEffect(() => {
        const startPayment = async () => {
            try {
                const res = await createCheckoutSession(id).unwrap();

                const stripe = await stripePromise;

                await stripe.redirectToCheckout({
                    sessionId: res.sessionId,
                });
            } catch (err) {
                console.error("Stripe checkout error", err);
            }
        };

        startPayment();
    }, [id, createCheckoutSession]);

    return <h2>Redirecting to payment...</h2>;
};

export default InvoicePayPage;
