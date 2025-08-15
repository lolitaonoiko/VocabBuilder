import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
    return (
        <Menu>
            <NavLink to="/dictionary">Dictionary</NavLink>
            <NavLink to="/recommend">Recommend</NavLink>
            <NavLink to="/training">Training</NavLink>
        </Menu>
    );
};

export default UserNav;
