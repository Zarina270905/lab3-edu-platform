import './Hero.css';
import heroImg from '../../assets/hero.png';

export default function Hero({ navigate }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__row">

          <div className="hero__image-wrap">
            <div className="hero__image">
              <img src={heroImg} alt="Лектор" />
            </div>
          </div>

          <div className="hero__content">

            <h1 className="hero__title">
              Наши лекторы — признанные специалисты в своих областях,
              готовые делиться опытом и знаниями.
            </h1>

            <div className="hero__tags">
              <span className="hero__tag">Алгоритмы</span>
              <span className="hero__tag">Python</span>
              <span className="hero__tag">Биохимия</span>
              <span className="hero__tag">Физика</span>
            </div>

            <div className="hero__meta">
              <span>10 лекторов</span>
              <span className="hero__meta-sep">·</span>
              <span>30+ дисциплин</span>
              <span className="hero__meta-sep">·</span>
              <span>2500+ студентов</span>
            </div>

            <div className="hero__actions">
              <a
                href="#/teachers"
                className="hero__link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/teachers');
                }}
              >
                Найти лектора →
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}