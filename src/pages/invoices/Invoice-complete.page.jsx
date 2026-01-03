import {Link, useSearchParams} from "react-router";
import {useGetInvoiceByIdQuery} from "@/lib/redux/query.js";

export default function InvoiceCompletePage() {
    const [searchParams] = useSearchParams();
    const invoiceId = searchParams.get("invoiceId");

    const { data: invoice, isLoading } = useGetInvoiceByIdQuery(invoiceId, {
        skip: !invoiceId,
        pollingInterval: 2000,
    });

    if (isLoading || !invoice) {
        return <div className="p-6 text-center">Verifying payment...</div>;
    }

    const isSuccess = invoice.paymentStatus === "PAID";
    console.log(isSuccess+" "+invoice.paymentStatus);


    return (
        <div className="max-w-xl mx-auto p-8 text-center">
            {isSuccess ? (
                <>
                    <h1 className="text-2xl font-bold text-green-600 mb-2">
                        ✅ Payment Successful
                    </h1>
                    <p className="mb-4">
                        Energy: {invoice.totalEnergyGenerated} kWh
                    </p>
                </>
            ) : (
                <>
                    <h1 className="text-2xl font-bold text-yellow-600 mb-2">
                        ⏳ Processing Payment...
                    </h1>
                    <p className="mb-4">
                        Please wait a moment
                    </p>
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