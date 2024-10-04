import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsFromLocalStorage } from '../redux/localStorageUtils';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch all products from local storage
    const products = getProductsFromLocalStorage();

    // Find the product based on the ID in the URL
    const foundProduct = products.find((prod) => prod.id === parseInt(id));

    // Set the product state to the found product
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  // Ensure the price is a valid number and fallback to 0 if it's not available
  const price = typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0;

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-16 pt-36">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image */}
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 shadow-md md:p-8 flex flex-col gap-y-2 p-2">
          <h2 className="text-3xl font-semibold mb-2 text-center sm:text-start">{product.name}</h2>
          <div>
            <h3 className="text-xl font-semibold mb-2">Product Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${price.toFixed(2)}
          </p>

          {/* Product Quantity and Add to Cart */}
          <div className="flex items-center gap-x-4 mb-4">
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="w-16 border p-2 text-center"
              min="1"
            />
            <button
              onClick={handleAddToCart}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800"
            >
              Add to Cart
            </button>
          </div>

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="bg-green-100 text-green-800 p-3 rounded-md">
              Product added to cart successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

