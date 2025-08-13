import { lazy } from 'react';

import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Logo = lazy(() => import('../Logo/Logo'));
const UserBar = lazy(() => import('../UserBar/UserBar'));
const BurgerMenu = lazy(() => import('../BurgerMenu/BurgerMenu'));

const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={s.header}>
            <Logo />
            <h2 className={s.headerText}>VocabBuilder</h2>
            {isLoggedIn && (
                <>
                    <UserBar />
                    <BurgerMenu />
                </>
            )}
        </header>
    );
};

export default Header;
