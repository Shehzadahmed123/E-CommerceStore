import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        return serializedCart ? JSON.parse(serializedCart) : { products: [], totalQuantity: 0, totalPrice: 0 };
    } catch (e) {
        console.error("Could not load cart", e);
        return { products: [], totalQuantity: 0, totalPrice: 0 };
    }
};

const saveCartToLocalStorage = (cartState) => {
    try {
        const serializedCart = JSON.stringify(cartState);
        localStorage.setItem('cart', serializedCart);
    } catch (e) {
        console.error("Could not save cart", e);
    }
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingProduct = state.products.find((item) => item.id === newItem.id);
            
            if (existingProduct) {
                existingProduct.quantity += newItem.quantity;
                existingProduct.totalPrice += newItem.price * newItem.quantity;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price * newItem.quantity,
                    image: newItem.image,
                });
            }
            state.totalQuantity += newItem.quantity;
            state.totalPrice += newItem.price * newItem.quantity;

            saveCartToLocalStorage(state); // Save cart to localStorage
        },
        
        removeFromCart: (state, action) => {
            const id = action.payload;
            const product = state.products.find((item) => item.id === id);
            
            if (product) {
                state.totalQuantity -= product.quantity;
                state.totalPrice -= product.totalPrice;
                state.products = state.products.filter((item) => item.id !== id);
            }

            saveCartToLocalStorage(state); // Save updated cart to localStorage
        },

        increaseQuantity: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload);
            if (product) {
                product.quantity++;
                product.totalPrice += product.price;
                state.totalQuantity++;
                state.totalPrice += product.price;
            }

            saveCartToLocalStorage(state); // Save updated cart to localStorage
        },

        decreaseQuantity: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity--;
                product.totalPrice -= product.price;
                state.totalQuantity--;
                state.totalPrice -= product.price;
            }

            saveCartToLocalStorage(state); // Save updated cart to localStorage
        },

        clearCart: (state) => {
            state.products = []; // Clear the products array
            state.totalQuantity = 0; // Reset total quantity
            state.totalPrice = 0; // Reset total price
            
            saveCartToLocalStorage(state); // Save the cleared cart state to localStorage
        },
    },
});

export const { 
    addToCart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;
