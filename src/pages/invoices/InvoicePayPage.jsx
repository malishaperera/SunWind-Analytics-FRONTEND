// import CheckoutForm from "./components/CheckoutForm";
// import {useParams} from "react-router";
//
// export default function InvoicePayPage() {
//     const { id } = useParams();
//
//     return (
//         <div>
//             <h1>Pay Invoice</h1>
//             <CheckoutForm invoiceId={id} />
//         </div>
//     );
// }
import { useEffect } from "react";
import { useCreateCheckoutSessionMutation } from "@/lib/redux/query";
import {useParams} from "react-router";

const InvoicePayPage = () => {
    const { id } = useParams();

    const [createCheckoutSession, { isLoading }] =
        useCreateCheckoutSessionMutation();

    useEffect(() => {
        const startPayment = async () => {
            try {
                const res = await createCheckoutSession(id).unwrap();

                // 🔴 IMPORTANT: backend should return url
                window.location.href = res.url;
            } catch (err) {
                console.error("Stripe checkout error", err);
            }
        };

        startPayment();
    }, [id, createCheckoutSession]);

    return (
        <div>
            <h2>Redirecting to payment...</h2>
            {isLoading && <p>Please wait...</p>}
        </div>
    );
};

export default InvoicePayPage;
