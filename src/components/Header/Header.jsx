import { lazy } from 'react';

import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';

const Logo = lazy(() => import('../Logo/Logo'));

const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userName = useSelector(selectUserName);
    const onClick = () => console.log(isLoggedIn);

    return (
        <header className={s.header}>
            <Logo />
            <h2 onClick={onClick} className={s.headerText}>
                VocabBuilder
            </h2>
            {isLoggedIn && (
                <>
                    <p>{userName}</p>
                    <svg>
                        <use href="/icons/sprite.svg#con-user"></use>
                    </svg>
                </>
            )}
        </header>
    );
};

export default Header;
