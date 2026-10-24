import './TeacherDetailPage.css';
import Tooltip from '../../components/Tooltip/Tooltip.jsx';

export default function TeacherDetailPage({ teacher, navigate }) {
  if (!teacher) {
    return (
      <section className="section">
        <div className="container">
          <p>Лектор не найден.</p>
          <button
            className="back-link"
            onClick={() => navigate('/teachers')}
          >
          </button>
        </div>
      </section>
    );
  }

  const initials = teacher.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <section className="section">
      <div className="container">
        <a
          href="#/teachers"
          className="back-link"
          onClick={(e) => {
            e.preventDefault();
            navigate('/teachers');
          }}
        >
          ← Все лекторы
        </a>

        <div className="detail-header">
          <div className="detail-photo">
            {teacher.photo ? (
              <img
                src={teacher.photo}
                alt={teacher.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.textContent = initials;
                }}
              />
            ) : (
              initials
            )}
          </div>
          <div className="detail-info">
            <h1>{teacher.name}</h1>
            
            {teacher.degree !== 'нет' && (
              <div className="degree">
                <Tooltip text="Научная степень, подтверждённая диссертационным советом">
                  {teacher.degree}
                </Tooltip>
              </div>
            )}
            <p><strong>Образование:</strong> {teacher.education}</p>
            <p>
              <strong>Стаж:</strong>{' '}
              <Tooltip text={`Опыт преподавания и работы по специальности — ${teacher.experience} лет`}>
                {teacher.experience} лет
              </Tooltip>
            </p>           



        





            <div className="subjects">
              {teacher.subjects.map((s, i) => (
                <span className="tag" key={i}>{s.title}</span>
              ))}
            </div>

            {/* Обычная кнопка рядом с именем — НЕ увеличиваем */}
            <button
              className="detail-signup-btn"
              onClick={() => navigate('/contacts')}
            >
              Записаться на курс
            </button>
          </div>
        </div>

        <h2 className="modal__section-title">Дисциплины и программа</h2>
        {teacher.subjects.map((subject, i) => (
          <div className="course-block" key={i}>
            <div className="course-block__title">{subject.title}</div>
            <div className="course-block__desc">{subject.description}</div>
            <ol className="lesson-list">
              {subject.lessons.map((lesson, j) => (
                <li key={j}>{lesson}</li>
              ))}
            </ol>
          </div>
        ))}

        <h2 className="modal__section-title">Тарифы</h2>
        <div className="tariff-list">
          {teacher.tariffs.map((t, i) => (
            <div className="tariff-item" key={i}>
              <span className="tariff-item__name">{t.name}</span>
              <span className="tariff-item__price">{t.price}</span>
            </div>
          ))}
        </div>

        <div className="detail-signup-bottom">
          <button
            className="detail-signup-btn detail-signup-btn--big"
            onClick={() => navigate('/contacts')}
          >
            Записаться на курс
          </button>
        </div>
      </div>
    </section>
  );
}