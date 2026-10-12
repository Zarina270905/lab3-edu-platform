import './TeachersPage.css';
import { useState } from 'react';
import TeacherList from '../../components/TeacherList/TeacherList.jsx';

export default function TeachersPage({ teachers, navigate }) {
  const [filter, setFilter] = useState('all');

  const filtered = teachers.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'male') return t.gender === 'male';
    if (filter === 'female') return t.gender === 'female';
    if (filter === 'degree') return t.degree !== 'нет';
    return true;
  });

  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Лекторы</h1>
        <p className="section__subtitle">
          Выберите лектора и ознакомьтесь с его дисциплинами и тарифами
        </p>

        <div className="filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Все ({teachers.length})
          </button>
          <button
            className={`filter-btn ${filter === 'male' ? 'active' : ''}`}
            onClick={() => setFilter('male')}
          >
            Мужчины
          </button>
          <button
            className={`filter-btn ${filter === 'female' ? 'active' : ''}`}
            onClick={() => setFilter('female')}
          >
            Женщины
          </button>
          <button
            className={`filter-btn ${filter === 'degree' ? 'active' : ''}`}
            onClick={() => setFilter('degree')}
          >
            С учёной степенью
          </button>
        </div>

        <TeacherList teachers={filtered} navigate={navigate} />
      </div>
    </section>
  );
}