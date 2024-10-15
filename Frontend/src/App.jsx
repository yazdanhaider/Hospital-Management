
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Patients from './components/Patients';
import Doctors from './components/Doctors';
import Admin from './components/Admin';
import Footer from './components/Footer';

import DoctorProfile from './components/DoctorProfile'

import NotFound from "./components/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {

  const doctor = {
    name: "Dr. Smith",
    specialization: "Cardiologist",
    experience: 15,
    degrees: ["MBBS", "MD Cardiology", "PhD in Cardiovascular Medicine"],
    bio: "Dr. Smith is a renowned cardiologist with over 15 years of experience. He specializes in diagnosing and treating heart-related ailments and has been recognized for his contributions to the field of cardiovascular medicine.",
    image: "https://imgs.search.brave.com/M0rIpTEVNJIFqzat4f5ZKBrLIZ69zwSoLsL3LhSeVQg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYWxlLWRvY3Rv/ci1jYXJ0b29uLWlt/YWdlLWlzb2xhdGVk/LXdoaXRlXzc3Njg5/NC0xMTY1MzMuanBn/P3NpemU9NjI2JmV4/dD1qcGc", // Replace with actual image URL
  };
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <main className="max-w-4xl mx-auto p-6 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/profile" element={<DoctorProfile
                          name={doctor.name}
                          specialization={doctor.specialization}
                          experience={doctor.experience}
                          degrees={doctor.degrees}
                          bio={doctor.bio}
                          image={doctor.image}
            />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ScrollToTopButton/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
