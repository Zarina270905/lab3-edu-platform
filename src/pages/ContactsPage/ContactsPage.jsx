
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
export default function ContactsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Свяжитесь с нами</h1>
        <p className="section__subtitle">
          Оставьте заявку — мы подберём лектора и ответим на вопросы
        </p>
        <ContactForm />
      </div>
    </section>
  );
}