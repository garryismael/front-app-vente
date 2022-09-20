import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { cartReducer } from './cartSlice';
import { authReducer } from './authSlice';

const reducer = combineReducers({
	purchase: cartReducer,
	auth: authReducer,
});

export const store = configureStore({
	reducer,
});

