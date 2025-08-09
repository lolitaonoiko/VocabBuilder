import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeToken, setToken, vocabBuilderApi } from '../../api/vocabBuilderApi';

export const registerThunk = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
    try {
        const { data } = await vocabBuilderApi.post('/api/users/signup', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginThunk = createAsyncThunk('auth/signin', async (credentials, thunkAPI) => {
    try {
        const { data } = await vocabBuilderApi.post('/api/users/signin', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logoutThunk = createAsyncThunk('/api/signout', async (_, thunkAPI) => {
    try {
        const { data } = await vocabBuilderApi.post('/api/users/signout');
        console.log(data);
        removeToken();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
