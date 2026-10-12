import { useState } from 'react';
import './HomePage.css';
import Hero from '../../components/Hero/Hero.jsx';
import Advantages from '../../components/Advantages/Advantages.jsx';
import TeacherList from '../../components/TeacherList/TeacherList.jsx';

export default function HomePage({ teachers, navigate }) {
  const [query, setQuery] = useState('');

  const allDisciplines = [];
  const seen = new Set();
  teachers.forEach((t) => {
    t.subjects.forEach((s) => {
      if (!seen.has(s.title)) {
        seen.add(s.title);
        allDisciplines.push(s.title);
      }
    });
  });

  const popularDisciplines = allDisciplines.slice(0, 8);

  const filtered = teachers.filter((t) => {
    const q = query.toLowerCase();
    return (
      t.name.toLowerCase().includes(q) ||
      t.subjects.some((s) => s.title.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <Hero navigate={navigate} />

      <section id="lecturers" className="section home__lecturers">
        <div className="container">

          <div className="teachers-header">
            <h2 className="section__title">Наши лекторы</h2>
            <p className="section__subtitle">
              Опытные специалисты в своих областях
            </p>
          </div>

          <div className="discipline-tags">
            <span className="discipline-tags__label">Популярные:</span>
            {popularDisciplines.map((title, i) => (
              <button
                key={i}
                className={`discipline-tag ${
                  query === title ? 'discipline-tag--active' : ''
                }`}
                onClick={() => setQuery(query === title ? '' : title)}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Поиск */}
          <div className="teachers-search">
            <input
              type="text"
              placeholder="Поиск по имени или дисциплине..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                className="teachers-search__clear"
                onClick={() => setQuery('')}
                aria-label="Очистить"
              >
                ×
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <TeacherList teachers={filtered} navigate={navigate} />
          ) : (
            <p className="teachers-empty">
              Никого не нашли. Попробуйте другое имя или дисциплину.
            </p>
          )}

        </div>
      </section>
    </>
  );
}