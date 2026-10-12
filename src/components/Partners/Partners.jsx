import './Partners.css';
import { partners } from '../../data/partners.js';

export default function Partners() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Наши партнёры</h2>
        <p className="section__subtitle">Компании, которые нам доверяют</p>
        <div className="partners-grid">
          {partners.map((p) => (
            <div className="partner" key={p.id}>
              <a
                className="partner__logo-row"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="partner__logo"
                  src={p.logo}
                  alt={p.name}
                />
                <span className="partner__arrow">↗</span>
              </a>
              <p className="partner__text">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}