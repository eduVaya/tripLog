import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    },
    reducers: {
        loadUser: (state, action) => {
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                loading: false
            }
        },
        registerSuccess: (state, action) => {
            const { payload } = action;
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
        },
        removeToken: (state) => {
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            };
        }
    }
});

export const { registerSuccess, registerFail } = authSlice.actions;

export default authSlice.reducer;