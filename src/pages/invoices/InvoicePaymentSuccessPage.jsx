import { Link } from "react-router";
import { CheckCircle } from "lucide-react";

export default function InvoicePaymentSuccessPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Successful</h1>
            <p className="text-gray-600 mb-6">
                Your invoice has been paid successfully.
            </p>

            <Link
                to="/dashboard/invoices"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
                Back to Invoices
            </Link>
        </div>
    );
}
