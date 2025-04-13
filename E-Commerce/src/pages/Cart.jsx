import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  return (
    <div>
      {/* Banner Image */}
      <img
        className="w-full h-40 sm:h-60 object-cover"
        src="https://png.pngtree.com/background/20210714/original/pngtree-low-poly-geometric-background-of-holographic-triangles-of-different-sizes-and-picture-image_1236850.jpg"
        alt="cartImage"
      />

      {/* Main Container */}
      <div className="max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full md:w-2/3">
          <CartItem />
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-1/3 bg-[#fafafa] py-6 px-4 rounded">
          <div className="flex flex-col gap-6 border-b border-gray-300 pb-6">
            <h2 className="text-2xl font-semibold">Cart Totals</h2>
            <p className="flex items-center justify-between text-base">
              Subtotal{" "}
              <span className="font-bold text-lg">${totalAmt}</span>
            </p>
            <p className="flex flex-col text-base">
              Shipping{" "}
              <span className="text-sm text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, ipsam.
              </span>
            </p>
          </div>

          <p className="font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>

          <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
