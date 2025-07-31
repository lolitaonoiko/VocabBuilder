import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, vocabBuilderApi } from '../../api/vocabBuilderApi';

export const registerThunk = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
    try {
        const { data } = await vocabBuilderApi.post('/api/users/signup', credentials);
        // setToken(data.token);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);

        return thunkAPI.rejectWithValue(error.message);
    }
});
