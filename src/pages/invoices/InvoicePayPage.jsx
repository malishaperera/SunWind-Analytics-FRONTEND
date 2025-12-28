import CheckoutForm from "./components/CheckoutForm";
import {useParams} from "react-router";

export default function InvoicePayPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>Pay Invoice</h1>
            <CheckoutForm invoiceId={id} />
        </div>
    );
}
