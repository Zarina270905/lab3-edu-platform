import './AboutPage.css';

export default function AboutPage({ navigate }) {
  return (
    <section className="section about">
      <div className="container">

        {/* Вводный блок — 2 колонки */}
        <div className="about__intro">
          <div className="about__intro-left">
            <span className="about__label">О платформе</span>
            <h2 className="about__intro-title">
              Соединяем экспертов и тех, кто хочет учиться
            </h2>
            <p className="about__text">
              Наша учебная платформа соединяет компании, образовательные
              учреждения и НКО с профессиональными лекторами, спикерами
              и тренерами.
            </p>
            <p className="about__text">
              Мы упрощаем процесс подбора, бронирования и организации лекций,
              помогая находить экспертов, которые не просто делятся знаниями,
              но и вдохновляют аудиторию.
            </p>
          </div>

          <div className="about__intro-right">
            <div className="about__card">
              <div className="about__card-icon">✦</div>
              <h3 className="about__card-title">Подбор за 1 день</h3>
              <p className="about__card-text">
                Подберём лектора под вашу задачу — от одного занятия
                до годовой программы.
              </p>
            </div>
            <div className="about__card about__card--accent">
              <div className="about__card-icon">◆</div>
              <h3 className="about__card-title">Онлайн и офлайн</h3>
              <p className="about__card-text">
                Работаем по всей России и за рубежом. Формат выбираете вы.
              </p>
            </div>
          </div>
        </div>

        {/* Блок цифр */}
        <div className="about__stats">
          <div className="about__stat">
            <div className="about__stat-num">10</div>
            <div className="about__stat-label">Лекторов</div>
          </div>
          <div className="about__stat">
            <div className="about__stat-num">30+</div>
            <div className="about__stat-label">Дисциплин</div>
          </div>
          <div className="about__stat">
            <div className="about__stat-num">2500+</div>
            <div className="about__stat-label">Студентов</div>
          </div>
          <div className="about__stat">
            <div className="about__stat-num">4.9</div>
            <div className="about__stat-label">Средняя оценка</div>
          </div>
        </div>

        {/* «Что мы предлагаем» */}
        <div className="about__values">
          <h2 className="about__section-title">Что мы предлагаем</h2>

          <div className="about__values-grid">
            <div className="about__value">
              <h3 className="about__value-title">Онлайн и офлайн</h3>
              <p className="about__value-text">
                Занимайтесь из любой точки мира или в нашем центре.
              </p>
            </div>
            <div className="about__value">
              <h3 className="about__value-title">Индивидуальный подход</h3>
              <p className="about__value-text">
                Программа подстраивается под ваш уровень и цели.
              </p>
            </div>
            <div className="about__value">
              <h3 className="about__value-title">Опытные лекторы</h3>
              <p className="about__value-text">
                Кандидаты и доктора наук, практики из индустрии.
              </p>
            </div>
            <div className="about__value">
              <h3 className="about__value-title">Сертификат</h3>
              <p className="about__value-text">
                Документ о прохождении курса по завершении обучения.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about__cta">
          <h2 className="about__cta-title">Готовы начать обучение?</h2>
          <p className="about__cta-text">
            Выберите лектора и оставьте заявку — мы свяжемся с вами.
          </p>
          <button
            className="about__cta-btn"
            onClick={() => navigate('/teachers')}
          >
            Выбрать лектора
          </button>
        </div>

      </div>
    </section>
  );
}