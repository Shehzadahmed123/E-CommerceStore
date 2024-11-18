import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const userData = localStorage.getItem("user"); 
    if (userData) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(isSearch));
    navigate("/filtered-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };
  
  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set the user as logged in
    setIsModelOpen(false); // Close the login modal
    // Save user data to local storage
    localStorage.setItem("user", JSON.stringify({ /* user data */ }));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?"); // Confirm before logout
    if (confirmLogout) {
      setIsLoggedIn(false); // Set the user as logged out
      localStorage.removeItem("user"); // Clear user data from local storage
      alert("You have logged out successfully.");
    }
  };

  return (
    <>
      <nav className="bg-yellow-800 text-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 pt-5 flex justify-between">
          <div className="sm:text-xl text-lg font-bold py-1">
            <Link to="/">E-STORE</Link>
          </div>
          <div className="relative flex-1 mx-4 ">
            <form action="" onSubmit={handleSearch}>
              <input
                className="w-full text-gray-800 outline-none py-2 px-4 rounded "
                type="text"
                placeholder="search products"
                onChange={(e) => setIsSearch(e.target.value)}
              />
              <FaSearch className="absolute top-3 right-3 text-slate-500" />
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-lg" />
              {products.length > 0 && (
                <span className="absolute top-0 left-3 text-xs bg-red-600 text-white rounded-full flex justify-center items-center px-1 ">
                  {products.length}
                </span>
              )}
            </Link>
            {isLoggedIn ? ( // Show user icon if logged in
              <div className="flex items-center">
                <FaUser className="text-lg cursor-pointer" onClick={handleLogout} />
              </div>
            ) : (
              <>
                <button className="hidden md:block" onClick={openLogin}>
                  Login | Register
                </button>
                <button className="block md:hidden" onClick={openLogin}>
                  <FaUser />
                </button>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
          {isLogin ? (
            <Login openSignUp={openSignUp} onLoginSuccess={handleLoginSuccess} /> 
          ) : (
            <Register openLogin={openLogin} />
          )}
        </Model>
      </nav>
    </>
  );
};

export default Navbar;

