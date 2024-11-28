import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddRecipe from './pages/AddRecipe';

function App() {
  const location = useLocation();

  // Определяем страницы, на которых не будет футера и навбара
  const hideFooterPaths = ['/login', '/register'];
  const hideNavbarPaths = ['/login', '/register'];

  return (
    <>
      {/* Условное отображение навбара */}
      {!hideNavbarPaths.includes(location.pathname) && (
        <header>
          <Navbar />
        </header>
      )}  

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
