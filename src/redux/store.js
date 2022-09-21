import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authReducer } from './authSlice';
import { cartReducer } from './cartSlice';

const reducer = combineReducers({
	purchase: cartReducer,
	auth: authReducer,
});

export const store = configureStore({
	reducer,
});

