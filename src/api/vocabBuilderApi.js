import axios from 'axios';

export const vocabBuilderApi = axios.create({
    baseURL: 'https://vocab-builder-backend.p.goit.global',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const setToken = token => {
    vocabBuilderApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
    vocabBuilderApi.defaults.headers.common.Authorization = ``;
};
