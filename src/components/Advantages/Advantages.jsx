import './Advantages.css';
export default function Advantages() {
  const items = [
    {
      title: 'Индивидуальный подход',
      text: 'Программа подстраивается под ваш уровень и цели.',
    },
    {
      title: 'Опытные лекторы',
      text: 'Кандидаты и доктора наук, практики из индустрии.',
    },
    {
      title: 'Онлайн и офлайн',
      text: 'Занимайтесь из любой точки мира или в нашем центре.',
    },
    {
      title: 'Сертификат',
      text: 'Документ о прохождении курса по завершении обучения.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Почему выбирают нас</h2>
        <p className="section__subtitle">Преимущества учебной платформы</p>
        <div className="advantages-grid">
          {items.map((item, i) => (
            <div className="advantage-card" key={i}>
              <h3 className="advantage-card__title">{item.title}</h3>
              <p className="advantage-card__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}