import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productSlice";

const AddProduct = ({ editingProduct, setEditingProduct }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct); // Set the form fields with the product data when editing
    } else {
      setProduct({ id: "", name: "", price: "", image: "", description: "" }); 
    }
    setSuccessMessage(""); // Reset the success message when editing or clearing form
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    console.log("Existing Products: ", existingProducts); 

    if (editingProduct) {
      // Update existing product
      const updatedProducts = existingProducts.map((p) =>
        p.id === editingProduct.id ? { ...p, ...product } : p
      );
      console.log("Updated Products: ", updatedProducts); 
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      dispatch(setProducts(updatedProducts));
      setEditingProduct(null); 
      setSuccessMessage("Product updated successfully!"); // Set success message
    } else {
      // Add new product
      existingProducts.push({
        ...product,
        id: existingProducts.length + 1,
      });
      localStorage.setItem("products", JSON.stringify(existingProducts));
      dispatch(setProducts(existingProducts));
      setSuccessMessage("Product added successfully!"); 
    }

    // Reset the form
    setProduct({ id: "", name: "", price: "", image: "", description: "" });

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <div className="container mx-auto py-4 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">{editingProduct ? "Edit Product" : "Add New Product"}</h2>
      {successMessage && ( 
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
