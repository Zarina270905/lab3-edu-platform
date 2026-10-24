import './TeacherCard.css';
import Tooltip from '../Tooltip/Tooltip.jsx';

export default function TeacherCard({ teacher, navigate }) {
  const initials = teacher.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="teacher-card">
      <div className="teacher-card__photo-wrap">
        <div className="teacher-card__photo">
          {teacher.photo ? (
            <img
              src={teacher.photo}
              alt={teacher.name}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.textContent = `место для фото\n${initials}`;
                e.target.parentNode.style.whiteSpace = 'pre-line';
              }}
            />
          ) : (
            <>
              место для фото
              <br />
              преподавателя
            </>
          )}
        </div>
        <div className="teacher-card__bar"></div>
      </div>

      <div className="teacher-card__info">
        <h3 className="teacher-card__name">{teacher.name}</h3>
        
        {teacher.degree !== 'нет' && (
          <p className="teacher-card__meta">
            <strong>Учёная степень:</strong>{' '}
            <Tooltip text="Научная степень, подтверждённая диссертационным советом">
              {teacher.degree}
            </Tooltip>
          </p>
        )}
        <p className="teacher-card__meta">
          <strong>Образование:</strong> {teacher.education}
        </p>
        <p className="teacher-card__meta">
          <strong>Стаж:</strong>{' '}
          <Tooltip text={`Опыт преподавания и работы по специальности — ${teacher.experience} лет`}>
            {teacher.experience} лет
          </Tooltip>
        </p>      


        {teacher.degree !== 'нет' && (
          <p className="teacher-card__meta">
            <strong>Учёная степень:</strong> {teacher.degree}
          </p>
        )}
        <p className="teacher-card__meta">
          <strong>Образование:</strong> {teacher.education}
        </p>
        <p className="teacher-card__meta">
          <strong>Стаж:</strong> {teacher.experience} лет
        </p>





        <div className="teacher-card__subjects">
          {teacher.subjects.map((s, i) => (
            <span key={i} className="tag">{s.title}</span>
          ))}
        </div>

        <div className="teacher-card__buttons">
          <button
            className="teacher-card__btn"
            onClick={() => navigate(`/teachers/${teacher.id}`)}
          >
            Подробнее →
          </button>
          <button
            className="teacher-card__btn teacher-card__btn--primary"
            onClick={() => navigate('/contacts')}
          >
            Записаться на курс
          </button>
        </div>
      </div>
    </div>
  );
}