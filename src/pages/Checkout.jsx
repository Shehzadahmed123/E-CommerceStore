import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(false);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // Function to place order and store it in localStorage
  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: Math.floor(Math.random() * 1000000),
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
      date: new Date().toLocaleDateString(),
    };

    // Save order to local storage
    let existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Set order and navigate to confirmation page
    setOrder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 pt-36 ">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between sm:space-x-10 mt-8">


        {/* checkout page  */}

          {/* billing information  */}
        <div className="md:w-2/3">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Full Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
                  className="border px-3 py-2  w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="border px-3 py-2  w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  className="border px-3 py-2  w-full"
                />
              </div>
            </div>
          </div>

          {/* Shipping information  */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Shipping information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address: </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  className="border px-3 py-2  w-full"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">City:</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your City"
                  className="border px-3 py-2  w-full"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code:</label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Enter your Zip Code"
                  className="border px-3 py-2  w-full"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  className=""
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2 mb-0.5">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2 mb-0.5">
                  Debit Card
                </label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                  {/* Debit Card Form */}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* order summary */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 sm:mt-0">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

          {/* Product List */}
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-gray-600">
                      $ {product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-600">
                  $ {product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Total Price</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            className="w-full mt-6 bg-red-600 text-white py-2 hover:bg-red-800 transition duration-300"
            onClick={handleOrder}
          >
            Place Order
          </button>

          <div className="flex items-center justify-center ">
            <button
              className="ml-4 text-blue-500 py-2 px-4 text-2xl hover:text-blue-700 flex items-center"
              onClick={() => navigate("/shop")}
            >
              <FaArrowLeft className="text-blue-500 text-2xl" />
              <p className="ml-2">Continue Shopping</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

