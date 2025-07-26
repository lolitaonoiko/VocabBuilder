import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import s from './RegisterForm.module.css';
import { registerValidationSchema } from '../../../validation/registerSchema';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(registerValidationSchema) });

    return (
        <div className={s.registerBox}>
            <div className={s.textBox}>
                <h2 className={s.title}>Register</h2>
                <p className={s.text}>To start using our services, please fill out the registration form below. All fields are mandatory:</p>
            </div>
            <form className={s.form} onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register('name')} className={s.input} placeholder="Name" type="text" />
                <span>{errors.name?.message}</span>

                <input {...register('email')} className={s.input} placeholder="Email" type="email" />
                <span>{errors.email?.message}</span>

                <input {...register('password')} className={s.input} placeholder="Password" type="password" />
                <span>{errors.password?.message}</span>

                <button className={s.filledBtn} type="submit">
                    Register
                </button>
                <button className={s.underlinedBtn}>Login</button>
            </form>
        </div>
    );
};

export default RegisterForm;
