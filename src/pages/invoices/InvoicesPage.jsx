import {useGetInvoicesQuery} from "@/lib/redux/query.js";
import {Link} from "react-router";


export default function InvoicesPage() {
    const { data, isLoading } = useGetInvoicesQuery();

    if (isLoading) return <p>Loading invoices...</p>;

    return (
        <div>
            <h1>My Invoices</h1>

            {data?.map((invoice) => (
                <div key={invoice._id} style={{ border: "1px solid #ddd", margin: 10, padding: 10 }}>
                    <p>
                        Period: {new Date(invoice.billingPeriodStart).toDateString()} -{" "}
                        {new Date(invoice.billingPeriodEnd).toDateString()}
                    </p>
                    <p>Energy: {invoice.totalEnergyGenerated} kWh</p>
                    <p>Status: {invoice.paymentStatus}</p>

                    {invoice.paymentStatus === "PENDING" && (
                        <Link to={`/dashboard/invoices/${invoice._id}/pay`}>
                            <button>Pay Now</button>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}
