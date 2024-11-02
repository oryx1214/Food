import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

function App() {
  const location = useLocation(); // Получаем текущий путь

  // Определяем страницы, на которых не будет футера
  const hideFooterPaths = ['/login', '/register'];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="App">
        <Outlet />
      </div>
      {/* Условное отображение футера */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
