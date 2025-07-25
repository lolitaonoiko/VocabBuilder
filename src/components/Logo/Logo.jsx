import s from './Logo.module.css';

const Logo = () => {
    return (
        <>
            <svg className={s.logoIcon}>
                <use href="/favicon.svg"></use>
            </svg>
        </>
    );
};

export default Logo;
