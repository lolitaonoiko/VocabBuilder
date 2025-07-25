import { useForm } from 'react-hook-form';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={s.registerBox}>
            <h2 className={s.title}>Register</h2>
            <p className={s.text}>To start using our services, please fill out the registration form below. All fields are mandatory:</p>
            <form>
                <input className={s.input} placeholder="Name" type="text" />
                <input className={s.input} placeholder="Email" type="email" />
                <input className={s.input} placeholder="Password" type="password" />

                <button>Register</button>
                <button>Login</button>
            </form>
        </div>
    );
};

export default RegisterForm;
