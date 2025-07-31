import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        email: null,
        name: null,
        id: null,
    },
    isAuthLoading: false,
    isAuthError: null,
    isLoggedIn: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
});

export const authReducer = slice.reducer;
