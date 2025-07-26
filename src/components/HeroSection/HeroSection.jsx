import { useLocation } from 'react-router-dom';

import s from './HeroSection.module.css';

const HeroSection = () => {
    const location = useLocation();

    const isLoginPage = location.pathname === '/login';

    return (
        <section className={s.section}>
            <img className={s.img} width="247" height="191" src="/images/hero-illustration.png" srcSet="/images/hero-illustration@2x.png 2x" alt="Girl and boy reading books" />
            {isLoginPage && (
                <>
                    <ul className={s.list}>
                        <li>
                            <p className={s.heroText}>Word</p>
                        </li>
                        <li>
                            <p className={s.heroText}>Translation</p>
                        </li>
                        <li>
                            <p className={s.heroText}>Grammar</p>
                        </li>
                        <li>
                            <p className={s.heroText}>Progress</p>
                        </li>
                    </ul>
                </>
            )}
        </section>
    );
};

export default HeroSection;
