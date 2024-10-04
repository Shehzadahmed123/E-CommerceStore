import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../compnents/ProductCard';

const Shop = () => {
  const products = useSelector(state => state.product.products); // Access products from the Redux store

  return (
    <div className="mx-auto py-12 pt-36 px-4 md:px-16 lg:px-24 bg-slate-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 cursor-pointer">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} /> 
            </div>
          ))
        ) : (
          <div>No products available</div> 
        )}
      </div>
    </div>
  );
};

export default Shop;

