import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = ({ openLogin }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Handle registration logic here
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some(user => user.email === values.email);

      if (userExists) {
        alert("User already exists!");
      } else {
        users.push(values); // Add the new user
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please log in.");
        openLogin(); // Switch to the login form
      }
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 text-black border"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600">* {formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border text-black"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600"> * {formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border text-black"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600">* {formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">Sign Up</button>
        </div>
      </form>

      <div className="text-center">
        <span className="text-gray-700">Already have an account? </span>
        <button className="text-red-800" onClick={openLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;



