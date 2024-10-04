import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const Order = ({ order: propOrder }) => {
    const [order, setOrder] = useState(propOrder || null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!propOrder) {
            const savedOrder = localStorage.getItem("order");
            if (savedOrder) {
                setOrder(JSON.parse(savedOrder));
            }
        }
    }, [propOrder]);

    useEffect(() => {
        if (order) {
            localStorage.setItem("order", JSON.stringify(order));
            // Clear the cart after placing the order
            dispatch(clearCart()); // Clear cart in Redux
            localStorage.removeItem("cart"); // Clear cart from localStorage
        }
    }, [order, dispatch]);

    if (!order) {
        return (
            <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 pt-36">
                <h2 className="text-2xl font-semibold mb-4">Order Not Found</h2>
                <p>It seems like there was an issue with your order. Please try again or contact support.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 pt-36">
            {/* Order Confirmation */}
            <h2 className="text-2xl font-semibold mb-4">Thank You for Your Order!</h2>
            <p className="mb-6">
                Your order has been placed successfully. You will receive an email
                confirmation shortly.
            </p>

            {/* Order Details */}
            <div className="mt-6 p-4 rounded-lg bg-gray-100 shadow-md border">
                <h3 className="text-lg font-semibold mb-4">Order Details</h3>
                <p className="mb-4">Order Number : {order.orderNumber}</p>

                {/* Shipping Information */}
                <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-md">
                        Shipping Information
                    </h4>
                    <p>{order.shippingInformation.address}</p>
                    <p>{order.shippingInformation.city}</p>
                    <p>{order.shippingInformation.zipCode}</p>
                </div>

                {/* Products Ordered */}
                <div className="mt-4">
                    <h4 className="font-semibold text-gray-700 mb-2 text-md">
                        Products Ordered
                    </h4>
                    {order.products.map((product) => (
                        <div key={product.id} className="flex justify-between">
                            <p>{product.name} x {product.quantity}</p>
                            <p className="mb-2">${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                {/* Total Price */}
                <div className="mt-4 flex justify-between font-bold text-gray-700">
                    <span>Total Price:</span>
                    <span className="font-bold">${order.totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <div className="mt-6 text-center">
                <button className="bg-green-500 text-white py-2 px-11 hover:bg-green-600 my-3 ml-4">
                    Track Order
                </button>
                <button className="bg-blue-500 text-white py-2 px-11 hover:bg-blue-600 my-3 ml-4"
                onClick={()=> navigate("/order-history")}>
                     Orders History
                </button>
                <button
                    className="ml-4 bg-red-500 text-white py-2 px-4 hover:bg-red-600"
                    onClick={() => navigate("/shop")}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default Order;
