import { lazy } from 'react';

const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));
const LoginForm = lazy(() => import('../../components/forms/LoginForm/LoginForm'));

const LoginPage = () => {
    return (
        <div>
            <HeroSection />
            <LoginForm />
        </div>
    );
};

export default LoginPage;
