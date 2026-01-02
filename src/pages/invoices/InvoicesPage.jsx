import { useState } from "react";
import { useGetInvoicesQuery } from "@/lib/redux/query";
import InvoiceCard from "./components/InvoiceCard";

export default function InvoicesPage() {
    const [filter, setFilter] = useState("ALL");

    const { data: invoices = [], isLoading } = useGetInvoicesQuery();

    if (isLoading) {
        return <div className="p-6">Loading invoices...</div>;
    }

    const filteredInvoices =
        filter === "ALL"
            ? invoices
            : invoices.filter((i) => i.paymentStatus === filter);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Invoices</h1>

            {/* Filter */}
            <div className="flex gap-3 mb-6">
                {["ALL", "PENDING", "PAID"].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                            filter === status
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700"
                        }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Invoice list */}
            {filteredInvoices.length === 0 ? (
                <div className="text-gray-500 text-center mt-10">
                    No invoices found
                </div>
            ) : (
                <div className="grid gap-4">
                    {filteredInvoices.map((invoice) => (
                        <InvoiceCard
                            key={invoice._id}
                            invoice={invoice}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
