import { Elements } from "@stripe/react-stripe-js";
import Heading from "../../../Component/Heading/Heading";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <section className="p-10">
            <Heading title={"Payment"}></Heading>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </section>
    );
};

export default Payment;