
import TeacherCard from '../TeacherCard/TeacherCard.jsx';
export default function TeacherList({ teachers, navigate }) {
  return (
    <div>
      {teachers.map((t) => (
        <TeacherCard key={t.id} teacher={t} navigate={navigate} />
      ))}
    </div>
  );
}