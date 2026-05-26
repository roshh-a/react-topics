import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useCheckout, PaymentElement } from "@stripe/react-stripe-js/checkout";
import React from "react";

const CheckoutForm = () => {
  const checkoutState = useCheckout();

  if (checkoutState.type === "loading") {
    return <div>Loading payment form…</div>;
  }

  if (checkoutState.type === "error") {
    return <div>Error: {checkoutState.error.message}</div>;
  }

  // ONLY when success
  const { checkout } = checkoutState;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkoutState.type !== "success") {
      return;
    }
    console.log("Before confirm");

    await checkout.updateEmail("roshini.ananth@taffinc.com");

    const result = await checkout.confirm();

    // console.log("After confirm",result);

    // if (result.type === "error") {
    //     console.error(result.error.message);
    //     alert("Payment failed. Please try again.");
    // } else {
    //     // Payment succeeded or redirect happened
    //     alert("Payment successful!");
    // }
  };

  return (
    <div className="flex text-center justify-center">
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <span className="p-3 w-2xl h-2xl mt-4">
          <button
            className="border rounded-md hover:cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </span>
      </form>
    </div>
  );
};

export default CheckoutForm;
