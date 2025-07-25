import s from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={s.section}>
            <img className={s.img} width="247" height="191" src="/images/hero-illustration.png" srcSet="/images/hero-illustration@2x.png 2x" alt="Girl and boy reading books" />
        </section>
    );
};

export default HeroSection;
