import { yupResolver } from '@hookform/resolvers/yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useState } from 'react';
import clsx from 'clsx';

import { loginValidationSchema } from '../../../validation/loginSchema';
import ValidationInfo from '../../ValidationInfo/ValidationInfo';
import { loginThunk } from '../../../redux/auth/operations';

import s from './LoginForm.module.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hiddenPass, setHiddenPass] = useState(true);

    const {
        register,
        reset,
        // setError,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginValidationSchema),
        mode: 'onChange',
    });

    const handleOnClickEye = () => {
        setHiddenPass(prev => !prev);
    };

    const handleOnClickRedirect = () => {
        navigate('/register');
    };

    const onSubmit = async data => {
        try {
            await dispatch(
                loginThunk({
                    email: data.email.trim(),
                    password: data.password.trim(),
                })
            )
                .unwrap()
                .then(() => {
                    navigate('/dictionary');
                });
            reset();
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className={s.loginBox}>
            <div className={s.textBox}>
                <h2 className={s.title}>Login</h2>
                <p className={s.text}>Please enter your login details to continue using our service:</p>
            </div>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inptBox}>
                    <input {...register('email')} className={clsx(s.input, errors.email?.message && s.inptError)} placeholder="Email" type="email" />
                    {errors.email?.message && <ValidationInfo name={'warning'} errors={errors} type={'email'} />}
                </div>
                <div className={s.inptBox}>
                    <input {...register('password')} className={clsx(s.input, errors.password?.message && s.inptError)} placeholder="Password" type={hiddenPass ? 'password' : 'text'} />
                    {errors.password?.message && <ValidationInfo name={'warning'} errors={errors} type={'password'} />}
                    <button className={s.iconBtn} onClick={handleOnClickEye} type="button">
                        {hiddenPass ? <FiEyeOff size={'20'} /> : <FiEye size={'20'} />}
                    </button>
                </div>
                <button className={s.filledBtn} type="submit">
                    Login
                </button>
            </form>

            <button className={s.underlinedBtn} type="button" onClick={handleOnClickRedirect}>
                Register
            </button>
        </div>
    );
};

export default LoginForm;
