import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ openSignUp, onLoginSuccess }) => { // Changed closeLogin to onLoginSuccess
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.email === values.email && user.password === values.password);
      
      if (user) {
        alert(`Welcome back, ${user.name}!`);
        onLoginSuccess(); // Call the onLoginSuccess function to update the navbar
      } else {
        alert("Invalid email or password!");
      }
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit}>
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
            <div className="text-red-600">* {formik.errors.email}</div>
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

        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="rememberMe" className="inline-flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              className="form-checkbox"
              onChange={formik.handleChange}
            />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-red-800">Forgot password?</a>
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
        </div>
      </form>

      <div className="text-center">
        <span className="text-gray-700">Don't have an account? </span>
        <button className="text-red-800" onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
