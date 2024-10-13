import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <div className="App">
      <Outlet />
    </div>
    </>
  );
}

export default App;
  