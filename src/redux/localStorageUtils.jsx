

// Function to get products from local storage
export const getProductsFromLocalStorage = () => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
};

// Function to save products to local storage
export const saveProductsToLocalStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};
