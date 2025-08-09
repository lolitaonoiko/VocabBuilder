import { lazy } from 'react';

import s from './Header.module.css';

const Logo = lazy(() => import('../Logo/Logo'));

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <h2 className={s.headerText}>VocabBuilder</h2>
        </header>
    );
};

export default Header;
