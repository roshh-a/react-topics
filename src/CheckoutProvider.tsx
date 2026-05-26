import { CheckoutProvider } from "@stripe/react-stripe-js/checkout";
import React, { useMemo } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

export const CheckoutPageProvider = () => {
  const stripePromise = loadStripe(
    "pk_test_51SmumT2KKUSDDlC6UecmGNP8CbuoYtjgUdO8oPWRyW8cm9SqQGLXbD8wOmihdZ8DBR1pAbjdL4DriDlXD4pOkTJI004NuEhDVU",
  );
  console.log("stripePromise", stripePromise);
  const promise = useMemo(() => {
    return fetch("/api/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);
  console.log("promise", promise);
  return (
    <CheckoutProvider
      stripe={stripePromise}
      options={{ clientSecret: promise }}
    >
      <CheckoutForm />
    </CheckoutProvider>
  );
};
