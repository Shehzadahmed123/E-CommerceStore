import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";

const AdminProductList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [products, setProductsState] = useState(JSON.parse(localStorage.getItem("products")) || []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    dispatch(setProducts(updatedProducts)); // Update Redux store
    setProductsState(updatedProducts); // Update local state

    // Show success message
    setSuccessMessage("Product deleted successfully!");

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div id="product-list">
      <h2 className="text-2xl font-semibold mb-4">Existing Products</h2>
      {successMessage && ( // Conditional rendering for success message
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      <div>
        {products.map((prod) => (
          <div key={prod.id} className="flex justify-between items-center mb-4 p-4 border">
            <div>
              <img src={prod.image} alt={prod.name} className="w-20 h-20 object-cover" />
              <h3 className="font-semibold">{prod.name}</h3>
              <p>Price: ${prod.price}</p>
              <p>{prod.description}</p>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                onClick={() => onEdit(prod)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => handleDelete(prod.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProductList;

