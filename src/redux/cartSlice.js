import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const itemCart = state.cart.find(
				(item) => item.id === action.payload.id,
			);
			if (itemCart) {
				itemCart.quantity += action.payload.quantity;
			} else {
				state.cart.push({ ...action.payload });
			}
		},
		setQuantity: (state, action) => {
			const itemCart = state.cart.find(
				(item) => item.id === action.payload.id,
			);
			itemCart.quantity = action.payload.quantity;
		},
		incrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		removeItem: (state, action) => {
			const removeItem = state.cart.filter(
				(item) => item.id !== action.payload,
			);
			state.cart = removeItem;
		},
		clearCart: (state) => {
			state.cart = [];
		}
	},
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, setQuantity, clearCart } =
	cartSlice.actions;
