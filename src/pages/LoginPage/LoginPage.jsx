import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('../../components/HeroSection/HeroSection'));
const LoginForm = lazy(() => import('../../components/forms/LoginForm/LoginForm'));
const Loader = lazy(() => import('../../components/Loader/Loader'));
const Header = lazy(() => import('../../components/Header/Header'));

const LoginPage = () => {
    return (
        <div>
            <Suspense fallback={<Loader />}>
                <Header />
                <HeroSection />
                <LoginForm />
            </Suspense>
        </div>
    );
};

export default LoginPage;
