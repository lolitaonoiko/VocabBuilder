import { Outlet } from 'react-router-dom';
import s from './MainLayout.module.css';
import { lazy } from 'react';

const Header = lazy(() => import('../Header/Header'));

const MainLayout = () => {
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
