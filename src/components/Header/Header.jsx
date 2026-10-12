import './Header.css';

export default function Header({ currentPage, navigate }) {
  const links = [
    { path: '/', label: 'Главная', key: 'home' },
    { path: '/disciplines', label: 'Дисциплины', key: 'disciplines' },
    { path: '/partners', label: 'Партнеры', key: 'partners' },
    { path: '/about', label: 'О нас', key: 'about' },
    { path: '/teachers', label: 'Лекторы', key: 'teachers', anchor: 'lecturers' },
  ];

  const handleClick = (path, anchor) => {
    if (anchor) {
      // Если уже на главной — просто скроллим
      if (window.location.hash === '' || window.location.hash === '#/' || window.location.hash === '#') {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }
    navigate(path);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav-bar">
          {links.map((link) => (
            <a
              key={link.key}
              href={`#${link.path}`}
              className={`nav-bar__link ${
                currentPage === link.key ||
                (currentPage === 'teacher-detail' && link.key === 'teachers')
                  ? 'active'
                  : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.path, link.anchor);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}