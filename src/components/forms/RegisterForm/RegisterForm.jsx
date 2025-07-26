import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import s from './RegisterForm.module.css';
import { registerValidationSchema } from '../../../validation/registerSchema';
import { lazy, useState } from 'react';
import clsx from 'clsx';

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
                <div className={s.inptBox}>
                    <input {...register('name')} className={clsx(s.input, errors.name?.message && s.inptError)} placeholder="Name" type="text" />
                    {errors.name?.message && <ValidationInfo name={'warning'} errors={errors} type={'name'} />}
                </div>

                <div className={s.inptBox}>
                    <input {...register('email')} className={clsx(s.input, errors.email?.message && s.inptError)} placeholder="Email" type="email" />
                    {errors.email?.message && <ValidationInfo name={'warning'} errors={errors} type={'email'} />}
                </div>

                <div className={s.inptBox}>
                    <input {...register('password')} className={clsx(s.input, errors.password?.message && s.inptError)} placeholder="Password" type={hiddenPass ? 'password' : 'text'} />
                    {errors.password?.message && <ValidationInfo name={'warning'} errors={errors} type={'password'} />}
                    <button className={s.iconBtn} onClick={handleOnClickEye}>
                        {hiddenPass ? <FiEyeOff size={'20'} /> : <FiEye size={'20'} />}
                    </button>
                </div>

                <button className={s.filledBtn} type="submit">
                    Register
                </button>
                <button className={s.underlinedBtn}>Login</button>
            </form>
        </div>
    );
};

export default RegisterForm;
