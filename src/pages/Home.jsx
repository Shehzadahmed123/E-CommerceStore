import React, { useEffect } from "react";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../compnents/ProductCard";
import CategorySection from "../compnents/CategorySection";
import { useNavigate } from "react-router-dom";
import Shop from "./Shop";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  // Load products from local storage
  useEffect(() => {
    const loadProductsFromLocalStorage = () => {
      try {
        const serializedProducts = localStorage.getItem("products");
        return serializedProducts ? JSON.parse(serializedProducts) : [];
      } catch (e) {
        console.error("Could not load products", e);
        return [];
      }
    };

    const storedProducts = loadProductsFromLocalStorage();
    dispatch(setProducts(storedProducts));
  }, [dispatch]);

  return (
    <>
      <div className="bg-slate-50 mt-2 pt-36 px-4 md:px-16 lg:px-24 py-4">
        <div className="container mx-auto  flex flex-col md:flex-row space-x-2">
          {/* Image section */}
          <div className="w-full md:w-full mt-8 md:mt-0 h-96 relative">
            <img
              src="https://as2.ftcdn.net/v2/jpg/07/02/56/83/1000_F_702568336_tqMLbGKopNK9pwGDLK8dKd3vbMujnfRV.jpg"
              alt="Hero"
              className="h-full w-full sm:object-fill object-cover rounded"
            />
            <div className="absolute top-16 sm:left-12 md:left-12  left-6 py-10 sm:py-0 ">
              <h2 className="lg:text-3xl  font-bold text-white">WELCOME TO E-STORE</h2>
              <p className="sm:text-lg text-sm mt-2.5 font-bold text-white">
                Shop for the best products at the best prices
              </p>
              <button
                className="bg-red-600 px-8 py-2 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
                onClick={() => navigate("/shop")}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div>
          <CategorySection />
        </div>
        <div className="container mx-auto pt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 cursor-pointer">
            {products.products.slice(0, 4).map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* shop section  */}
     <div> 
      <Shop/>
      </div>
    </>
  );
};

export default Home;

