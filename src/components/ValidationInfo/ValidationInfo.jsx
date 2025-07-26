import s from './ValidationInfo.module.css';

const ValidationInfo = ({ name, errors, type }) => {
    return (
        <span className={s.errInfoBox}>
            <svg className={s.icon}>
                <use href={`/icons/sprite.svg#icon-${name}`}></use>
            </svg>
            <span className={s.errorMessage}>{errors[type]?.message}</span>
        </span>
    );
};

export default ValidationInfo;
