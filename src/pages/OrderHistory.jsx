import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="pt-36 px-4 md:px-16 lg:px-24 my-5">
      <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-lg text-gray-600">No orders yet!</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li key={index} className="border rounded-lg shadow-lg p-4 bg-white">
              <p className="text-lg font-bold">Order Number: <span className="text-blue-600">{order.orderNumber}</span></p>
              <p className="text-md font-medium">Total: <span className="text-green-600">${order.totalPrice.toFixed(2)}</span></p>
              <p className="text-md font-medium">Date: <span className="text-gray-500">{new Date(order.date).toLocaleDateString()}</span></p>
              
              <div className="mt-2">
                <p className="font-semibold">Shipping Information:</p>
                <p>{order.shippingInformation.address}<br/> {order.shippingInformation.city}<br/>{order.shippingInformation.zip}</p>
              </div>

              <div className="mt-2">
                <p className="font-semibold">Products:</p>
                <ul className="list-disc list-inside">
                  {order.products.map((product, i) => (
                    <li key={i}>
                      {product.name} - <span className="font-medium">${product.price} x {product.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
