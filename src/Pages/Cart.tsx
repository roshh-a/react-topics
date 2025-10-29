import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";

export const Cart = () => {
  const cart = useContext(cartContext);
  console.log("cartItemsList from cart", cart?.cartItems);
  return (
    <>
      <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
        <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
          My Shopping Cart
        </h1>
        <div className="flex justify-between mt-8">
          {cart?.cartItems.length == 0 ? (
            <div className="bg-white p-4 w-[800px] rounded-xl text-center">
              Add Items to the cart
            </div>
          ) : (
            <div className="bg-white p-4 w-[800px] rounded-xl">
              <table className="w-full bg-white rounded-xl">
                <thead>
                  <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-3.5 tracking-wide">
                    <th className="text-left px-2 py-2">Product</th>
                    <th className="px-2 py-2">price</th>
                    <th className="w-7 px-2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.cartItems.map((items) => (
                    <tr className="text-center">
                      <td className="px-2 py-2 text-left align-top">
                        <img
                          src={items.imageSrc}
                          alt={items.imageAlt}
                          className="w-[100px] mr-2 inline-block h-[100px]"
                        />
                        <span>{items.title}</span>
                      </td>
                      <td className="px-2 py-2">${items.price}</td>
                      {/* Remove item */}
                      <td className="px-2 py-2">
                        <button
                          type="button"
                          onClick={() => cart.removeFromCart(items.id)}
                        >
                          <svg
                            width="24"
                            className="cursor-pointer"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                              stroke="#CCCCCC"
                              stroke-miterlimit="10"
                            ></path>
                            <path
                              d="M16 8.5L8 16.5"
                              stroke="#666666"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16 16.5L8 8.5"
                              stroke="#666666"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* <tfoot>
                                    <tr className="border-t border-gray-400">
                                        <td className="px-2 py-2" colSpan={3}>
                                            <button className="px-8 cursor-pointer py-3.5 bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-4">
                                                Return to shop
                                            </button>
                                        </td>
                                        <td className="px-2 py-2" colSpan={2}>
                                            <button
                                                className="px-8 py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-4">
                                                Update Cart
                                            </button>
                                        </td>
                                    </tr>
                                </tfoot> */}
              </table>
            </div>
          )}
          <div className="w-[424px] bg-white rounded-lg p-6">
            <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
              Cart Total
            </h2>
            <div className="w-[376px] py-3 justify-between items-center flex">
              <span className="text-[#4c4c4c] text-base font-normal leading-normal">
                Total:
              </span>
              <span className="text-[#191919] text-base font-semibold leading-tight">
                ₹{cart?.totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
              <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
                Shipping:
              </span>
              <span className="text-[#191919] text-sm font-medium leading-[21px]">
                Free
              </span>
            </div>
            <div className="w-[376px] py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
              <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
                Subtotal:
              </span>
              <span className="text-[#191919] text-sm font-medium leading-[21px]">
                ₹{cart?.totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-[376px] text-white mt-5 px-10 py-4 bg-[#00b206] rounded-[44px] gap-4 text-base font-semibold leading-tight">
              Proceed to checkout
            </button>
          </div>
        </div>
        {/* <div className="mt-6 p-5 w-[800px] bg-white rounded-lg border border-[#e6e6e6] justify-start items-center gap-6 inline-flex">
                    <h3 className="text-[#191919] w-1/4 text-xl font-medium classNameName leading-[30px]">
                        Coupon Code
                    </h3>
                    <div className="w-full border border-[#e6e6e6]">
                        <input
                            placeholder="Enter code"
                            type="text"
                            className="w-2/3 px-6 py-3.5 outline-none bg-white rounded-[46px] text-[#999999] text-base font-normal leading-normal"
                        />
                        <button className="px-10 py-4 bg-[#333333] rounded-[43px] text-white text-base font-semibold leading-tight">
                            Apply Coupon
                        </button>
                    </div>
                </div> */}
      </section>
    </>
  );
};
