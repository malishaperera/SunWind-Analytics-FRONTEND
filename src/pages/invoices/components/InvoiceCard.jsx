import { Link } from "react-router";

export default function InvoiceCard({ invoice }) {
    return (
        <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div>
                <p className="font-semibold">
                    Period:{" "}
                    {new Date(invoice.billingPeriodStart).toDateString()} →{" "}
                    {new Date(invoice.billingPeriodEnd).toDateString()}
                </p>

                <p className="text-sm text-gray-600">
                    Energy: {invoice.totalEnergyGenerated} kWh
                </p>

                <p className="text-sm">
                    Status:{" "}
                    <span
                        className={
                            invoice.paymentStatus === "PAID"
                                ? "text-green-600"
                                : "text-orange-600"
                        }
                    >
            {invoice.paymentStatus}
          </span>
                </p>
            </div>

            {invoice.paymentStatus === "PENDING" && (
                <Link
                    to={`/dashboard/invoices/${invoice._id}/pay`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Pay Now
                </Link>
            )}
        </div>
    );
}
