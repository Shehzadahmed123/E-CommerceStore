import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


import "./App.css";
import Navbar from "./compnents/Navbar";
import Footer from "./compnents/Footer";
import Shop from "./pages/Shop";
import Order from "./pages/Order";
import { useState } from "react";
import FilteredData from "./pages/FilteredData";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./compnents/Contact";
import AboutUs from "./compnents/AboutUs";
import AdminPanel from "./compnents/AdminPanel";
import OrderHistory from "./pages/OrderHistory";

function App() {
  const [order, setOrder] = useState(null);
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout setOrder = {setOrder}/>} />
        <Route path="/order-confirmation" element={<Order order = {order}/>} />
        <Route path="/order-history" element={<OrderHistory/>} />
        <Route path="/filtered-data" element={<FilteredData/>} />
        <Route path="/product-details/:id" element={<ProductDetail/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/admin" element={<AdminPanel/>} />
      </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
