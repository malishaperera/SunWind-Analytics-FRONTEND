import { useParams } from "react-router";
import CheckoutForm from "./components/CheckoutForm";
import { useGetInvoiceByIdQuery } from "@/lib/redux/query";

export default function InvoicePaymentPage() {
    const { id } = useParams();
    const { data: invoice, isLoading } = useGetInvoiceByIdQuery(id);

    if (isLoading) return <div>Loading invoice...</div>;
    if (!invoice) return <div>Invoice not found</div>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">
                Pay Invoice
            </h1>

            {/* Invoice summary */}
            <div className="bg-white rounded-xl shadow p-4 mb-6">
                <p><b>Period:</b> {new Date(invoice.billingPeriodStart).toDateString()} → {new Date(invoice.billingPeriodEnd).toDateString()}</p>
                <p><b>Energy:</b> {invoice.totalEnergyGenerated} kWh</p>
                <p><b>Status:</b> {invoice.paymentStatus}</p>
            </div>

            {/* Stripe Checkout */}
            <CheckoutForm invoiceId={invoice._id} />
        </div>
    );
}
