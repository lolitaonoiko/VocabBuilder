import * as yup from 'yup';

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, 'Email must be in the format: example@domain.com')
        .min(3, 'Must be at least 3 characters long')
        .max(50, 'Too long')
        .required('Email is required'),
    password: yup
        .string()
        .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/, 'Password must contain at least one uppercase letter and one number')
        .required('Password is required')
        .min(8, 'Must be at least 8 characters long')
        .max(12, 'Too long'),
});
