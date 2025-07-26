import { lazy } from 'react';

import s from './RegisterPage.module.css';

const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));
const RegisterForm = lazy(() => import('../../components/forms/RegisterForm/RegisterForm'));

const RegisterPage = () => {
    return (
        <>
            <HeroSection />
            <RegisterForm />
        </>
    );
};

export default RegisterPage;
