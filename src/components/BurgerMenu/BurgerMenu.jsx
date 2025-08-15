import { lazy } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const UserNav = lazy(() => import('../UserNav/UserNav'));

const BurgerMenu = () => {
    return (
        <div>
            <UserNav />
        </div>
    );
};

export default BurgerMenu;
