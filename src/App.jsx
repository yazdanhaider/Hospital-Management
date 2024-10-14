import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Patients from './components/Patients';
import Doctors from './components/Doctors';
import Admin from './components/Admin';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <main className="max-w-4xl mx-auto p-6 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
