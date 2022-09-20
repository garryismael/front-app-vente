import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: localStorage.getItem('user-token') || null
	},
	reducers: {
		setUser: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
			localStorage.setItem('user-token', state.token);
		},
		logout: (state) => {
			state.user = {};
			localStorage.removeItem('user-token');
			state.token = null;
		},
	},
});

export const authReducer = authSlice.reducer;

export const { setUser, logout } = authSlice.actions;

