import { useSearchParams, Link } from "react-router";
import { useGetSessionStatusQuery } from "@/lib/redux/query";

export default function InvoiceCompletePage() {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");

    const { data, isLoading } = useGetSessionStatusQuery(sessionId, {
        skip: !sessionId,
    });

    if (isLoading) {
        return <div className="p-6 text-center">Verifying payment...</div>;
    }

    const isSuccess = data?.paymentStatus === "paid";

    return (
        <div className="max-w-xl mx-auto p-8 text-center">
            {isSuccess ? (
                <>
                    <h1 className="text-2xl font-bold text-green-600 mb-2">
                        ✅ Payment Successful
                    </h1>
                    <p className="mb-4">
                        Amount Paid: ${(data.amountTotal / 100).toFixed(2)}
                    </p>
                </>
            ) : (
                <>
                    <h1 className="text-2xl font-bold text-red-600 mb-2">
                        ❌ Payment Failed
                    </h1>
                    <p className="mb-4">Please try again</p>
                </>
            )}

            <Link
                to="/dashboard/invoices"
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
                Back to Invoices
            </Link>
        </div>
    );
}
