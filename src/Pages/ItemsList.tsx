import React, { useContext, useEffect } from "react";
import { productData } from "../Constants";
import { cartContext } from "../Context/CartContext";
import { Axios } from "../Services/ApiService";
export const ItemsList = () => {
  const cart = useContext(cartContext);
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("session_id");

  console.log("Stripe session id:", sessionId);

  useEffect(() => {
    if (!sessionId) return;

    const verifyPayment = async () => {
      const response = await Axios.post("/api/verify-checkout-session", {
        sessionId,
      });
      if (response.data.status == "paid") {
        window.alert("Payment verified");
      } else {
        window.alert("Payment not completed");
      }
    };

    // fetch("/api/verify-checkout-session", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ sessionId }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.status === "paid") {
    //       window.alert("Payment verified");
    //     } else {
    //       window.alert("Payment not completed");
    //     }
    //   });

    verifyPayment();
  }, [sessionId]);
  const handleAddToCart = (productId: number) => {
    const selectedProduct = productData.find(
      (products) => products.id === productId,
    );
    if (selectedProduct) {
      cart?.addToCart(selectedProduct);
    }
  };
  return (
    <>
      <div className="relative bg-linear-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-800 dark:text-white mb-8 animate-bounce-slow">
            Featured Collection
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.map((products) => (
              <div
                key={products.id}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={products.imageSrc}
                  alt={products.imageAlt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white">
                    {products.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary-600 font-bold">
                      ₹{products.price}
                    </p>
                    <span className={products.tagColorClasses}>
                      {products.tag}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(products.id)}
                    className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
