// import { slide as Menu } from 'react-burger-menu';
// import { NavLink } from 'react-router-dom';

// const UserNav = () => {
//     return (
//         <Menu>
//             <NavLink to="/dictionary">Dictionary</NavLink>
//             <NavLink to="/recommend">Recommend</NavLink>
//             <NavLink to="/training">Training</NavLink>
//         </Menu>
//     );
// };

// export default UserNav;
import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { MenuIcon, X } from 'lucide-react'; // іконки

import s from './UserNav.module.css';

const UserNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = state => {
        setIsOpen(state.isOpen);
        document.body.style.overflow = state.isOpen ? 'hidden' : 'auto';
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* власна іконка меню */}
            <button className={s.iconButton} onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>

            <Menu right isOpen={isOpen} onStateChange={handleStateChange} customBurgerIcon={false} customCrossIcon={false} width={'66%'}>
                <nav className={s.menuContent}>
                    <NavLink to="/dictionary" onClick={() => setIsOpen(false)}>
                        Dictionary
                    </NavLink>
                    <NavLink to="/recommend" onClick={() => setIsOpen(false)}>
                        Recommend
                    </NavLink>
                    <NavLink to="/training" onClick={() => setIsOpen(false)}>
                        Training
                    </NavLink>
                </nav>
            </Menu>
        </>
    );
};

export default UserNav;
