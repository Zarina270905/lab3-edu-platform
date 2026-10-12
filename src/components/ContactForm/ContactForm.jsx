import './ContactForm.css';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="contact-wrapper">
      {sent && <div className="form-success">Заявка отправлена! Мы свяжемся с вами в ближайшее время.</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ваше имя *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Иван Иванов" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="ivan@example.com" />
        </div>
        <div className="form-group">
          <label>Телефон</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+7 (999) 123-45-67" />
        </div>
        <div className="form-group">
          <label>Интересующая дисциплина</label>
          <select name="subject" value={form.subject} onChange={handleChange}>
            <option value="">Выберите курс</option>
            <option>Алгоритмы и структуры данных</option>
            <option>Python для анализа данных</option>
            <option>Биохимия</option>
            <option>Молекулярная биология</option>
            <option>Микроэкономика</option>
            <option>Макроэкономика</option>
            <option>Архитектурное проектирование</option>
            <option>Общая физика</option>
            <option>Русский язык и стилистика</option>
            <option>Графический дизайн</option>
            <option>UX/UI-дизайн</option>
            <option>Общая психология</option>
            <option>Линейная алгебра</option>
            <option>Машинное обучение</option>
            <option>Международные отношения</option>
          </select>
        </div>
        <div className="form-group">
          <label>Сообщение</label>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Расскажите о ваших целях..." />
        </div>
        <button type="submit" className="form-submit">Отправить заявку</button>
      </form>
    </div>
  );
}