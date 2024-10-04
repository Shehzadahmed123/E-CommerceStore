import React, { useState } from "react";
import AddProduct from "./AddProduct";
import AdminProductList from "./AdminProductList";
import UserList from "./UserList";
import Register from "./Register";
import Login from "./Login";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("AddProduct");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setActiveComponent("AddProduct");
  };

  const openLogin = () => {
    setActiveComponent("Login");
    setShowAuth(true);
  };

  const openSignUp = () => {
    setActiveComponent("Register");
    setShowAuth(true);
  };

  const closeAuth = () => {
    setShowAuth(false);
    setActiveComponent("AddProduct");
  };

  return (
    <div className="flex flex-col md:flex-row pt-28">
      <div className="bg-gray-800 text-white sm:min-h-screen p-5 w-full md:w-64">
        <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <button
                className={`hover:text-green-400 w-full text-left pl-1 ${activeComponent === "AddProduct" ? 'border-2 p-2 rounded border-slate-500 text-green-500' : ''}`}
                onClick={() => setActiveComponent("AddProduct")}
              >
                Add Products
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`hover:text-green-400 w-full text-left pl-1 ${activeComponent === "AdminProductList" ? 'border-2 p-2 rounded border-slate-500 text-green-500' : ''}`}
                onClick={() => setActiveComponent("AdminProductList")}
              >
                Product List
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`hover:text-green-400 w-full text-left pl-1 ${activeComponent === "UserList" ? 'border-2 p-2 rounded border-slate-500 text-green-500'  : ''}`}
                onClick={() => setActiveComponent("UserList")}
              >
                User List
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 p-5 w-full">
        {showAuth ? (
          activeComponent === "Login" ? (
            <Login openSignUp={openSignUp} closeLogin={closeAuth} /> 
          ) : (
            <Register openLogin={openLogin} />
          )
        ) : (
          <>
            {activeComponent === "AddProduct" && (
              <AddProduct editingProduct={editingProduct} setEditingProduct={setEditingProduct} />
            )}
            {activeComponent === "AdminProductList" && (
              <AdminProductList onEdit={handleEditProduct} />
            )}
            {activeComponent === "UserList" && <UserList />}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
