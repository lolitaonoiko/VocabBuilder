import * as yup from 'yup';

export const registerValidationSchema = yup.object({
    name: yup.string().min(2, 'Name must be at least 2 characters').max(40, 'Too long').required('Name is required'),
    email: yup
        .string(/^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/, 'Email must be in the format: example@domain.com')
        .min(3, 'Must be at least 3 characters long')
        .max(50, 'Too long')
        .required('Email is required'),
    password: yup
        .string(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Password is incorrect')
        .required('Password is required')
        .min(8, 'Must be at least 8 characters long')
        .max(12, 'Too long'),
});
