import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component
import './App.css';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;