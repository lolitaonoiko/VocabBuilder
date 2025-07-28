import { useNavigate } from 'react-router-dom';
import s from './LoginForm.module.css';
import { useState } from 'react';
import { loginValidationSchema } from '../../../validation/loginSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

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
        <div>
            <div>
                <h2>Login</h2>
                <p>Please enter your login details to continue using our service:</p>
                <form>
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
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
