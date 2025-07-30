import * as yup from 'yup';

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Email must be in the format: example@domain.com')
        .required('Email is required'),
    password: yup
        .string()
        .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Password must consist of 6 English letters and 1 number')
        .required('Password is required'),
});
