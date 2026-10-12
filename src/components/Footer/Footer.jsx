import './Footer.css';
export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <h4>Учебная платформа</h4>
            <p>Онлайн и офлайн обучение по IT, наукам и творческим дисциплинам.</p>
          </div>
          <div className="footer__col">
            <h4>Разделы</h4>
            <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Главная</a>
            <a href="#/partners" onClick={(e) => { e.preventDefault(); navigate('/partners'); }}>Партнеры</a>
            <a href="#/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>О нас</a>
            <a href="#/teachers" onClick={(e) => { e.preventDefault(); navigate('/teachers'); }}>Лекторы</a>
          </div>
          <div className="footer__col">
            <h4>Контакты</h4>
            <p>+7 (999) 123-45-67</p>
            <p>info@edu-platform.ru</p>
            <p>Москва, ул. Образцовая, 10</p>
          </div>
          <div className="footer__col">
            <h4>Режим работы</h4>
            <p>Пн–Пт: 9:00 – 21:00</p>
            <p>Сб–Вс: 10:00 – 18:00</p>
          </div>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} Учебная платформа. Все права защищены.
        </div>
      </div>
    </footer>
  );
}