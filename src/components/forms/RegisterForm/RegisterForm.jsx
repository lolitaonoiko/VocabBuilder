import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import s from './RegisterForm.module.css';
import { registerValidationSchema } from '../../../validation/registerSchema';
import { lazy, useState } from 'react';

const ValidationInfo = lazy(() => import('../../ValidationInfo/ValidationInfo'));

const RegisterForm = () => {
    const [hiddenPass, setHiddenPass] = useState(true);
    const handleOnClickEye = () => {
        setHiddenPass(prev => !prev);
    };

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
                {errors.name?.message && <ValidationInfo name={'warning'} errors={errors} type={'name'} />}

                <input {...register('email')} className={s.input} placeholder="Email" type="email" />
                {errors.email?.message && <ValidationInfo name={'warning'} errors={errors} type={'email'} />}

                <input {...register('password')} className={s.input} placeholder="Password" type={hiddenPass ? 'password' : 'text'} />
                {errors.password?.message && <ValidationInfo name={'warning'} errors={errors} type={'password'} />}

                <button onClick={handleOnClickEye}>{hiddenPass ? <FiEyeOff /> : <FiEye />}</button>

                <button className={s.filledBtn} type="submit">
                    Register
                </button>
                <button className={s.underlinedBtn}>Login</button>
            </form>
        </div>
    );
};

export default RegisterForm;
