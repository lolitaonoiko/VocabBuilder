import { lazy, Suspense } from 'react';

import s from './RegisterPage.module.css';

const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));
const RegisterForm = lazy(() => import('../../components/forms/RegisterForm/RegisterForm'));
const Loader = lazy(() => import('../../components/Loader/Loader'));
const Header = lazy(() => import('../../components/Header/Header'));

const RegisterPage = () => {
    return (
        <div className={s.registerPage}>
            <Suspense fallback={<Loader />}>
                <Header />
                <HeroSection />
                <RegisterForm />
            </Suspense>
        </div>
    );
};

export default RegisterPage;
