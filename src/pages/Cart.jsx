import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images-main/emptycart.png";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import Model from "../compnents/Model";
import ChangeAddress from "../compnents/ChangeAddress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main street, H #123");
  const [isModelopen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 pt-36">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            SHOPPING CART
          </h3>
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="sm:flex justify-between border-b items-center mb-4 text-xs font-bold hidden md:flex">
                <p>PRODUCTS</p>
                <div className="flex space-x-4 sm:space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              {/* Cart Products */}
              <div className="space-y-6 md:space-y-4">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border-b space-y-4 sm:space-y-0"
                  >
                    <div className="flex sm:space-x-4 sm:w-1/2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4 mt-4">
                        <h3 className="text-md sm:text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex sm:space-x-6 sm:w-1/2 justify-between sm:justify-end items-center">
                      <p className="text-sm sm:text-base">${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-sm sm:text-xl font-bold px-1.5 border-r"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-sm sm:text-xl px-2">
                          {product.quantity}
                        </p>
                        <button
                          className="text-sm sm:text-xl px-1 border-l"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm sm:text-base">
                        ${(product.quantity * product.price).toFixed(2)}
                      </p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 sm:mt-0">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p className="pb-4">Shipping:</p>
                <span>Shipping to:</span>
                <span className="text-xs font-bold">{address}</span>
                <button
                  className="text-blue-500 hover:underline mt-2 block"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
              <div className="flex items-center justify-center ">
            <button
              className="ml-4 text-blue-500 py-2 px-4 text-2xl hover:text-blue-700 flex items-center"
              onClick={() => navigate("/")}
            >
              <FaArrowLeft className="text-blue-500 text-2xl" />
              <p className="ml-2">Continue Shopping</p>
            </button>
          </div>
            </div>
          </div>

          {/* Address Modal */}
          <Model isModelOpen={isModelopen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </Model>
        </div>
      ) : (
        <>
          <div className="flex justify-center">
            <img src={EmptyCart} alt="Empty Cart" className="h-64 sm:h-96" />
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="ml-4 text-blue-500 py-2 px-4 text-2xl hover:text-blue-700 flex items-center"
              onClick={() => navigate("/shop")}
            >
              <FaArrowLeft className="text-blue-500 text-2xl" />
              <p className="ml-2">Continue Shopping</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
