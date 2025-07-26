import { lazy } from 'react';

const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));

const LoginPage = () => {
    return (
        <div>
            <HeroSection />
        </div>
    );
};

export default LoginPage;
