import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name: 'alert',
    initialState: [],
    reducers: {
        setAlert: (state, action) => {
            return [...state, action.payload];
        },
        removeAlert: (state, action) => {
            const alertIdToRemove = action.payload;
            return state.filter(alert => alert.id !== alertIdToRemove);
        }
    }
});

// Action creators are generated for each case reducer function
export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;