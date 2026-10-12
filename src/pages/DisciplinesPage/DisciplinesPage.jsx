import './DisciplinesPage.css';
import { teachers } from '../../data/teachers.js';

export default function DisciplinesPage({ navigate }) {
  const allDisciplines = [];
  const seen = new Set();

  teachers.forEach((teacher) => {
    teacher.subjects.forEach((subject) => {
      if (!seen.has(subject.title)) {
        seen.add(subject.title);
        allDisciplines.push({
          title: subject.title,
          description: subject.description,
          lessonsCount: subject.lessons.length,
        });
      }
    });
  });

  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Дисциплины</h1>
        <p className="section__subtitle">
          Все курсы и направления обучения на нашей платформе
        </p>

        <div className="disciplines-grid">
          {allDisciplines.map((d, i) => (
            <div
              className="discipline-card"
              key={i}
              onClick={() => navigate(`/disciplines/${encodeURIComponent(d.title)}`)}
            >
              <h3 className="discipline-card__title">{d.title}</h3>
              <p className="discipline-card__desc">{d.description}</p>

              <div className="discipline-card__footer">
                <span className="discipline-card__meta">
                  Уроков: {d.lessonsCount}
                </span>
                <span className="discipline-card__more">Подробнее →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}