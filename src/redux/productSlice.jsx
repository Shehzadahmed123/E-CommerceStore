import { createSlice } from '@reduxjs/toolkit';

// Function to load products from local storage
const loadProductsFromLocalStorage = () => {
    try {
        const serializedProducts = localStorage.getItem('products');
        return serializedProducts ? JSON.parse(serializedProducts) : [];
    } catch (e) {
        console.error("Could not load products", e);
        return [];
    }
};

// Function to save products to local storage
const saveProductsToLocalStorage = (products) => {
    try {
        const serializedProducts = JSON.stringify(products);
        localStorage.setItem('products', serializedProducts);
    } catch (e) {
        console.error("Could not save products", e);
    }
};

const initialState = {
    products: loadProductsFromLocalStorage(),
    searchTerm: '',
    filteredData: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
            saveProductsToLocalStorage(state.products); // Save products to localStorage
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.filteredData = state.products.filter(product => 
                product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            );
        },
    },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
