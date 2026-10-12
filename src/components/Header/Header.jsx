import './Header.css';

export default function Header({ currentPage, navigate }) {
  const links = [
    { path: '/', label: 'Главная', key: 'home' },
    { path: '/disciplines', label: 'Дисциплины', key: 'disciplines' },
    { path: '/partners', label: 'Партнеры', key: 'partners' },
    { path: '/about', label: 'О нас', key: 'about' },
    { path: '/teachers', label: 'Лекторы', key: 'teachers' },
  ];

  const handleClick = (path) => {
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
                handleClick(link.path);
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