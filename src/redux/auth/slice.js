import { createSlice } from '@reduxjs/toolkit';

import { currentUserThunk, loginThunk, logoutThunk, registerThunk } from './operations';

const initialState = {
    user: {
        // токен в локал зберегти?
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
            // дублювання коду, винести у функції + додати addMatch
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
            })
            .addCase(loginThunk.pending, state => {
                state.isAuthLoading = true;
                state.isAuthError = null;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isAuthLoading = false;
                state.isAuthError = action.payload;
                state.isLoggedIn = false;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isAuthError = null;
                state.isAuthLoading = false;
                state.isLoggedIn = true;
                state.user.email = action.payload.email;
                state.user.name = action.payload.name;
            })
            .addCase(logoutThunk.pending, state => {
                state.isAuthLoading = true;
                state.isAuthError = null;
            })
            .addCase(logoutThunk.rejected, (state, action) => {
                state.isAuthError = action.payload;
                state.isAuthLoading = false;
            })
            .addCase(logoutThunk.fulfilled, state => {
                state.isAuthLoading = false;
                state.isAuthError = null;
                state.isLoggedIn = false;
                state.user.email = null;
                state.user.name = null;
                state.user.id = null;
            })
            .addCase(currentUserThunk.fulfilled, (state, action) => {
                state.user.id = action.payload.id;
            })
            .addCase(currentUserThunk.rejected, (state, action) => {
                state.isAuthError = action.payload;
            }),
});

export const authReducer = slice.reducer;
