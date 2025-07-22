import { Outlet } from 'react-router-dom';
import s from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <>
            <div className={s.container}>
                {/* <Header /> */}header
                <div className={s.contentWrapper}>
                    {/* <Sidebar /> */}
                    <main className={s.mainContent}>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;
