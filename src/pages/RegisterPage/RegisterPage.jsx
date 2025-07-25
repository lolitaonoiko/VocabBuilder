import { lazy } from 'react';

const Header = lazy(() => import('../../components/Header/Header'));
const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));
const RegisterForm = lazy(() => import('../../components/forms/RegisterForm/RegisterForm'));

const RegisterPage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <RegisterForm />
        </>
    );
};

export default RegisterPage;
