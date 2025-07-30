import { useNavigate } from 'react-router-dom';
import s from './LoginForm.module.css';
import { lazy, useState } from 'react';
import { loginValidationSchema } from '../../../validation/loginSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ValidationInfo = lazy(() => import('../../ValidationInfo/ValidationInfo'));

const LoginForm = () => {
    const navigate = useNavigate();
    const [hiddenPass, setHiddenPass] = useState(true);
    const handleOnClickEye = () => {
        setHiddenPass(prev => !prev);
    };
    const handleOnClickRedirect = () => {
        navigate('/register');
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(loginValidationSchema) });

    return (
        <div className={s.loginBox}>
            <div className={s.textBox}>
                <h2 className={s.title}>Login</h2>
                <p className={s.text}>Please enter your login details to continue using our service:</p>
            </div>

            <form className={s.form} onSubmit={handleSubmit(data => console.log(data))}>
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
