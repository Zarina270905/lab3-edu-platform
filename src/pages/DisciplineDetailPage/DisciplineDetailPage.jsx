import './DisciplineDetailPage.css';
import { teachers } from '../../data/teachers.js';

export default function DisciplineDetailPage({ disciplineTitle, navigate }) {
  // Ищем всех преподавателей, которые ведут эту дисциплину
  const lecturers = teachers.filter((t) =>
    t.subjects.some((s) => s.title === disciplineTitle)
  );

  if (lecturers.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <a
            href="#/disciplines"
            className="back-link"
            onClick={(e) => {
              e.preventDefault();
              navigate('/disciplines');
            }}
          >
            ← Все дисциплины
          </a>
          <p>По этой дисциплине пока нет преподавателей.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <a
          href="#/disciplines"
          className="back-link"
          onClick={(e) => {
            e.preventDefault();
            navigate('/disciplines');
          }}
        >
          ← Все дисциплины
        </a>

        <h1 className="section__title">{disciplineTitle}</h1>
        <p className="section__subtitle">
          Преподаватели, которые ведут эту дисциплину
        </p>

        <div className="lecturers-grid">
          {lecturers.map((teacher) => {
            const initials = teacher.name
              .split(' ')
              .map((w) => w[0])
              .slice(0, 2)
              .join('');

            return (
              <div
                className="lecturer-card"
                key={teacher.id}
                onClick={() => navigate(`/teachers/${teacher.id}`)}
              >
                <div className="lecturer-card__photo">
                  {teacher.photo ? (
                    <img src={teacher.photo} alt={teacher.name} />
                  ) : (
                    initials
                  )}
                </div>

                <div className="lecturer-card__info">
                  <h3 className="lecturer-card__name">{teacher.name}</h3>
                  {teacher.degree !== 'нет' && (
                    <p className="lecturer-card__degree">{teacher.degree}</p>
                  )}
                  <p className="lecturer-card__meta">
                    Стаж: {teacher.experience} лет
                  </p>
                  <p className="lecturer-card__meta">{teacher.education}</p>

                  <span className="lecturer-card__more">Подробнее →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}