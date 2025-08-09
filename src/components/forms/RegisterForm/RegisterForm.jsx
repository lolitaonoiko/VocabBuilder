import { yupResolver } from '@hookform/resolvers/yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import clsx from 'clsx';

import { useState } from 'react';

import { registerValidationSchema } from '../../../validation/registerSchema';
import ValidationInfo from '../../ValidationInfo/ValidationInfo';
import { registerThunk } from '../../../redux/auth/operations';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [hiddenPass, setHiddenPass] = useState(true);

    const {
        register,
        reset,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerValidationSchema),
        mode: 'onChange',
    });

    const handleOnClickEye = () => {
        setHiddenPass(prev => !prev);
    };

    const handleOnClickRedirect = () => {
        navigate('/login');
    };

    const onSubmit = async data => {
        try {
            await dispatch(
                registerThunk({
                    name: data.name.trim(),
                    email: data.email.trim(),
                    password: data.password.trim(),
                })
            )
                .unwrap()
                .then(() => navigate('/dictionary'));
            reset();
        } catch (error) {
            if (error === 'Request failed with status code 409') {
                setError('email', {
                    type: 'manual',
                    message: 'Email in use',
                });
            } else {
                toast.error(error);
            }
        }
    };

    return (
        <div className={s.registerBox}>
            <div className={s.textBox}>
                <h2 className={s.title}>Register</h2>
                <p className={s.text}>To start using our services, please fill out the registration form below. All fields are mandatory:</p>
            </div>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
                    <button type="button" className={s.iconBtn} onClick={handleOnClickEye}>
                        {hiddenPass ? <FiEyeOff size={'20'} /> : <FiEye size={'20'} />}
                    </button>
                </div>

                <button className={s.filledBtn} type="submit">
                    Register
                </button>
            </form>
            <button className={s.underlinedBtn} type="button" onClick={handleOnClickRedirect}>
                Login
            </button>
        </div>
    );
};

export default RegisterForm;
