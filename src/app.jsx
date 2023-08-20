import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';
import 'boxicons/css/boxicons.min.css';

function App() {
  
  return (
   <div><Navbar /><main>
   <Outlet />
   </main></div>

  );
}

export default App;