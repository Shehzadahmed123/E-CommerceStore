import React from "react";




const UserList = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleDelete = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("User deleted successfully!");
    window.location.reload(); // Refresh the page to see the updated user list
  };

  return (
    <div id="user-list">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b">
              <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => handleDelete(user.email)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
