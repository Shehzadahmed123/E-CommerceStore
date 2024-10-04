# React + Vite


Project Title:  E-Commerce Platform [E-Store]

//Project Description

This project is a responsive e-commerce platform built using modern web technologies. It allows users to browse products, add items to their cart, place orders, and manage them through an admin panel. The platform is designed to be responsive and adaptable for mobile, tablet, and desktop views.

//Features

Landing page  -------showcasing featured products.
Product listing----- with filters.
Detailed product pages----- with descriptions and images.
Shopping cart---- with real-time updates.
Multi-step--- checkout process.
Admin panel---- for managing products (add, edit, delete) and user accounts.
Order placement------ with order history tracking.
Data persistence----- via local storage.
User authentication--- with login/logout functionality .

//Technologies Used

Frontend: React.js, Redux Toolkit, Tailwind CSS, HTML, CSS, JavaScript.
Backend: RapidAPI for product data and user orders.
State Management: Redux Toolkit.
Form Handling: Formik and Yup for validation.
Build Tool: Vite.

//Installation

Clone the repository:
https://github.com/Shehzadahmed123/E-CommerceStore.git


cd E-CommerceStore     move the project folder
npm install         then install dependencies using this command
npm run dev         Start the development server

http://localhost:3001/       Open the app in your browser



Usage

Home Page:               Displays Top products and shop products with links to product pages.
Product Listing:         Browse products with filtering and search options.
Product Page:            View details of each product and add them to the cart.
Cart:                    Displays selected products with quantity control, and proceed to checkout.
Order Placement:         Successfully place orders, which get saved in the order history.
Admin Panel:             Manage products and User accounts.
Checkout:                Multi-step process including shipping details,Billing Information,order review,and payment options.



//Admin Panel Features
 to access to admin panel using this link or address     http://localhost:3001/admin

Add Products:            Admins can add new products with name, price, image URL, and description.
Delete Products:         Products can be deleted from the product listing.
Edit Products:           Admins can modify existing products. The system provides feedback via success messages when a product is successfully updated.


//Redux Toolkit Integration

cartSlice:     Manages the state of the shopping cart, including adding/removing products and updating quantities.
productSlice:  Manages the state of products, allowing admins to add, edit, and delete products.
Local Storage  Integration: Cart state is stored in local storage to preserve data on page refresh.

//API Integration

RapidAPI:      The platform integrates with RapidAPI for product and order data management. Data is fetched from an API to simulate real-world scenarios, enhancing the user experience with dynamic content.


//Responsive Design

The application is fully responsive and adjusts to various screen sizes using Tailwind CSS. Key breakpoints have been implemented to ensure a seamless experience across devices.

//Known Issues and Future Improvements

Duplicated product data on page refresh: This issue occurs under certain conditions but will be resolved in future updates.
User Authentication Improvements: Plans to implement more secure user authentication mechanisms.
Backend Server: Currently, the app relies on local storage and RapidAPI. Future improvements include creating a custom backend for better data handling.