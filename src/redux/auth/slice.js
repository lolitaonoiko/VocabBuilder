import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        email: null,
        name: null,
        id: null,
    },
    token: null,
    isAuthLoading: false,
    isAuthError: null,
    isLoggedIn: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase();
    },
});

export const authReducer = slice.reducer;
