import {useGetSessionStatusQuery} from "@/lib/redux/query.js";
import {useSearchParams,Link} from "react-router";


export default function PaymentCompletePage() {
    const [params] = useSearchParams();
    const sessionId = params.get("session_id");

    const { data, isLoading } = useGetSessionStatusQuery(sessionId, {
        skip: !sessionId,
    });

    if (isLoading) return <p>Verifying payment...</p>;

    return (
        <div>
            {data?.paymentStatus === "paid" ? (
                <h1>Payment Successful ✅</h1>
            ) : (
                <h1>Payment Failed ❌</h1>
            )}

            <Link to="/dashboard/invoices">Back to invoices</Link>
        </div>
    );
}
