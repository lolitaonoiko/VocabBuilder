import { Outlet, useLocation } from 'react-router-dom';
import s from './MainLayout.module.css';
import { lazy } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Header = lazy(() => import('../Header/Header'));

const MainLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const location = useLocation();
    if (location.pathname === '/') {
        return <Navigate to={isLoggedIn ? '/dictionary' : '/login'} replace />;
    }
    return (
        <>
            <div className={s.container}>
                <Header />

                <main className={s.mainContent}>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default MainLayout;
