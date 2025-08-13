import { useSelector } from 'react-redux';
import s from './UserBar.module.css';
import { selectUserName } from '../../redux/auth/selectors';

const UserBar = () => {
    const userName = useSelector(selectUserName);

    return (
        <div>
            <p className={s.userName}>{userName}</p>
            <span className={s.spanIcon}>
                <svg className={s.icon} width="20" height="20">
                    <use href="/icons/sprite.svg#icon-user"></use>
                </svg>
            </span>
        </div>
    );
};

export default UserBar;
