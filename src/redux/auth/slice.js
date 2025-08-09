import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operations';

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
    extraReducers: builder =>
        builder
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.isAuthError = null;
                state.isAuthLoading = false;
                state.isLoggedIn = true;
                state.user.email = action.payload.email;
                state.user.name = action.payload.name;
            })
            .addCase(registerThunk.pending, state => {
                state.isAuthError = null;
                state.isAuthLoading = true;
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.isAuthLoading = false;
                state.isAuthError = action.payload;
                state.isLoggedIn = false;
            }),
});

export const authReducer = slice.reducer;
