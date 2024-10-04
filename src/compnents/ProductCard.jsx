import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();

    // Add product with a default quantity of 1
    const productWithQuantity = { ...product, quantity: 1 };
    dispatch(addToCart(productWithQuantity));

    setShowSuccess(true);

    // Hide the success message after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="bg-white p-4 mt-8 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
        <img
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <div className="flex items-center mt-2">
        
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={`text-yellow-500 ${index < product.rating ? '' : 'opacity-50'}`} />
          ))}
        </div>
        <div
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300"
          onClick={(e) => handleAddToCart(e, product)}
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add to cart</span>
        </div>
        {showSuccess && (
          <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center p-2">
            Product added to cart successfully!
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;









