import { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import TeachersPage from './pages/TeachersPage/TeachersPage.jsx';
import TeacherDetailPage from './pages/TeacherDetailPage/TeacherDetailPage.jsx';
import DisciplinesPage from './pages/DisciplinesPage/DisciplinesPage.jsx';
import DisciplineDetailPage from './pages/DisciplineDetailPage/DisciplineDetailPage.jsx';
import PartnersPage from './pages/PartnersPage/PartnersPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import { teachers } from './data/teachers.js';

export default function App() {
  const [route, setRoute] = useState({ page: 'home', params: {} });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      const parts = hash.split('/').filter(Boolean);

      if (parts.length === 0) {
        setRoute({ page: 'home', params: {} });
      } else if (parts[0] === 'teachers' && parts[1]) {
        setRoute({ page: 'teacher-detail', params: { id: Number(parts[1]) } });
      } else if (parts[0] === 'teachers') {
        setRoute({ page: 'teachers', params: {} });
      } else if (parts[0] === 'disciplines' && parts[1]) {
        setRoute({
          page: 'discipline-detail',
          params: { title: decodeURIComponent(parts[1]) },
        });
      } else if (parts[0] === 'disciplines') {
        setRoute({ page: 'disciplines', params: {} });
      } else if (parts[0] === 'partners') {
        setRoute({ page: 'partners', params: {} });
      } else if (parts[0] === 'about') {
        setRoute({ page: 'about', params: {} });
      } else if (parts[0] === 'contacts') {
        setRoute({ page: 'contacts', params: {} });
      } else {
        setRoute({ page: 'home', params: {} });
      }
      window.scrollTo(0, 0);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (route.page) {
      case 'teachers':
        return <TeachersPage teachers={teachers} navigate={navigate} />;
      case 'teacher-detail': {
        const teacher = teachers.find((t) => t.id === route.params.id);
        return <TeacherDetailPage teacher={teacher} navigate={navigate} />;
      }
      case 'disciplines':
        return <DisciplinesPage navigate={navigate} />;
      case 'discipline-detail':
        return (
          <DisciplineDetailPage
            disciplineTitle={route.params.title}
            navigate={navigate}
          />
        );
      case 'partners':
        return <PartnersPage />;
      case 'about':
        return <AboutPage navigate={navigate} />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <HomePage teachers={teachers} navigate={navigate} />;
    }
  };

  return (
    <>
      <Header currentPage={route.page} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </>
  );
}