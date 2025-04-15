import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import {
  deleteItem,
  resetCart,
  decrementQuantity,
  incrementQuantity,
} from '../redux/bazarSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  return (
    <div className="w-full px-4 md:w-2/3 md:pr-10">
      <div className="w-full mb-6">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
      </div>

      <div className="space-y-6">
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 border-b pb-4"
          >
            {/* Remove Button + Image */}
            <div className="flex items-center gap-3">
              <MdOutlineClose
                onClick={() => {
                  dispatch(deleteItem(item._id));
                  toast.error(`${item.title} is removed`);
                }}
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-28 h-28 object-cover"
                src={item.image}
                alt="productImage"
              />
            </div>

            {/* Product Title */}
            <h2 className="w-full sm:w-48 text-sm font-medium text-center sm:text-left">
              {item.title}
            </h2>

            {/* Price */}
            <p className="w-full sm:w-14 text-center sm:text-left font-semibold text-gray-700">
              ${item.price}
            </p>

            {/* Quantity Controls */}
            <div className="w-full sm:w-52 flex flex-col sm:flex-row items-center justify-between text-gray-500 border p-3 rounded">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 mt-2 sm:mt-0 text-sm font-semibold">
                <span
                  onClick={() =>
                    dispatch(
                      decrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-6 w-6 flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>
                {item.quantity}
                <span
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-6 w-6 flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>

            {/* Total */}
            <p className="w-full sm:w-14 text-center font-semibold text-gray-700">
              ${item.quantity * item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Cart Actions */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          onClick={() => {
            dispatch(resetCart());
            toast.error('Your Cart is Empty!');
          }}
          className="bg-red-500 text-white py-2 px-6 hover:bg-red-800 duration-300"
        >
          Reset Cart
        </button>
        <Link to="/">
          <button className="flex items-center gap-1 text-gray-500 hover:text-black duration-300">
            <HiOutlineArrowLeft />
            Go Shopping
          </button>
        </Link>
      </div>

      {/* Toast Notification */}
      <ToastContainer
        position="top-left"
        autoClose={3000}
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

export default CartItem;
