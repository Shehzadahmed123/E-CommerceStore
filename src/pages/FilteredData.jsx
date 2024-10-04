import React from "react";
import ProductCard from "../compnents/ProductCard";
import { useSelector } from "react-redux";
import NoProduct from "../assets/Images-main/not_found.png";

const FilteredData = () => {
  const filteredProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 pt-36">
        {filteredProducts.length > 0 ? 
        <>
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            {" "}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      </>
        : 
        <div className="flex justify-center">
            <img className="h-96" src={NoProduct} alt="" />
        </div>
        }
    </div>
  );
};

export default FilteredData;
