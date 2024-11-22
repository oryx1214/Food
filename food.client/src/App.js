import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddRecipe from './pages/AddRecipe'; // Добавляем компонент для добавления рецепта

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
        <div className="content-container">
          {location.pathname === '/add-recipe' ? <AddRecipe /> : <Outlet />}
        </div>
      </div>
      {/* Условное отображение футера */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
