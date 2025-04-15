import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CartItem from "../components/CartItem";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [paynow, setPaynow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPaynow(true);
    } else {
      toast.error("Please login to checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

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
              Subtotal <span className="font-bold text-lg">${totalAmt}</span>
            </p>
            <p className="flex flex-col text-base">
              Shipping{" "}
              <span className="text-sm text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, ipsam.
              </span>
            </p>
          </div>

          <p className="font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>

          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 transition duration-300"
          >
            Proceed to Checkout
          </button>
          {paynow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51RDsdj2ejsGgqE5dJFN1xRivBtLn3h3U9vzzI8ov5luG0vA9SNwfzou70O45n9c1bUyzH4nqdicsxbom1u5CkDN200poEHova7"
                name="Bazar Online Shopping"
                amount={totalAmt * 100}
                label="Pay to bazar"
                description={`your payment amount is $${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
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
