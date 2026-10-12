# Учебная платформа — Лекторы и дисциплины

Учебный проект на React + Vite. Платформа для подбора лекторов
и дисциплин: онлайн и офлайн обучение для физических и юридических лиц.

## Стек и версии

| Технология | Версия |
|---|---|
| Node.js | v24.21.0 |
| npm | v11.19.0 |
| React | ^19.2.0 |
| React DOM | ^19.2.0 |
| Vite | ^8.3.1 |
| ESLint | ^9.39.1 |

Сторонние библиотеки не используются — только React и Vite.

## Команды для установки и запуска

Установка зависимостей:

    npm install

Запуск dev-сервера:

    npm run dev

Сайт откроется по адресу: http://localhost:5173

Сборка production-версии:

    npm run build
    npm run preview

Проверка кода линтером:

    npm run lint

## Структура папок

    LAB3/
    ├── public/                     Публичные файлы (favicon)
    ├── src/
    │   ├── assets/                 Изображения (фото лекторов, логотипы)
    │   │   ├── hero.png
    │   │   ├── icl.jpg
    │   │   ├── tatneft.jpg
    │   │   ├── man1.png … man5.png
    │   │   └── woman1.png … woman5.png
    │   │
    │   ├── components/             React-компоненты (каждый в своей папке)
    │   │   ├── Advantages/         Блок «Почему выбирают нас»
    │   │   ├── ContactForm/        Форма обратной связи
    │   │   ├── Footer/             Подвал сайта
    │   │   ├── Header/             Шапка с навигацией
    │   │   ├── Hero/               Главный баннер
    │   │   ├── Partners/           Блок партнёров
    │   │   ├── TeacherCard/        Карточка лектора
    │   │   └── TeacherList/        Список лекторов
    │   │
    │   ├── data/                   Данные приложения
    │   │   ├── teachers.js         Массив лекторов
    │   │   └── partners.js         Массив партнёров
    │   │
    │   ├── pages/                  Страницы сайта
    │   │   ├── AboutPage/          О нас
    │   │   ├── ContactsPage/       Контакты
    │   │   ├── DisciplineDetailPage/  Конкретная дисциплина
    │   │   ├── DisciplinesPage/    Все дисциплины
    │   │   ├── HomePage/           Главная
    │   │   ├── PartnersPage/       Партнёры
    │   │   ├── TeacherDetailPage/  Детальная страница лектора
    │   │   └── TeachersPage/       Все лекторы
    │   │
    │   ├── App.jsx                 Корневой компонент + роутинг
    │   ├── index.css               Глобальные стили
    │   └── main.jsx                Точка входа
    │
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md
    
## Где лежат данные и роутинг

### Данные

Все данные находятся в папке src/data/.

- src/data/teachers.js — массив teachers из 10 лекторов
  (5 мужчин и 5 женщин). У каждого: id, name, education,
  experience, degree, photo, subjects (дисциплины и уроки),
  tariffs (тарифы). Также экспортируются reviews и faq.
- src/data/partners.js — массив partners (ICL, TATNEFT).
  У каждой компании: id, name, logo, url, description.

Изображения хранятся в src/assets/ и импортируются
в компоненты через import.

### Роутинг

Роутинг реализован вручную через window.location.hash
(без react-router). Вся логика находится в файле src/App.jsx.

| URL (hash) | Страница |
|---|---|
| #/ | Главная |
| #/teachers | Все лекторы |
| #/teachers/:id | Конкретный лектор |
| #/disciplines | Все дисциплины |
| #/disciplines/:title | Конкретная дисциплина |
| #/partners | Партнёры |
| #/about | О нас |
| #/contacts | Контакты |

При изменении hash компонент App слушает событие hashchange
и рендерит нужную страницу.
