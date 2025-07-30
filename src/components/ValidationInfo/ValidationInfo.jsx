import clsx from 'clsx';
import s from './ValidationInfo.module.css';

const ValidationInfo = ({ name, errors, type }) => {
    const errorMessagesClasses = () => clsx(s.errInfoBox, type === 'password' && s.passErrorMessage);
    return (
        <span className={errorMessagesClasses()}>
            <svg width="16" height="16" className={s.icon}>
                <use href={`/icons/sprite.svg#icon-${name}`}></use>
            </svg>
            <span className={s.errorMessage}>{errors[type]?.message}</span>
        </span>
    );
};

export default ValidationInfo;
