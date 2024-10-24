import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";
import DoctorProfile from "./components/DoctorProfile";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useState } from "react";
import LoginContext from "./context/LoginContext";

function App() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Smith",
      specialty: "Cardiology",
      patients: 120,
      appointments: 450,
      experience: 15,
      qualifications: "MD, FACC",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Dr. Smith is a renowned cardiologist with over 15 years of experience in treating complex heart conditions.",
    },
    {
      id: 2,
      name: "Dr. Johnson",
      specialty: "Pediatrics",
      patients: 200,
      appointments: 600,
      experience: 10,
      qualifications: "MD, FAAP",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Dr. Johnson is a compassionate pediatrician dedicated to providing comprehensive care for children of all ages.",
    },
    {
      id: 3,
      name: "Dr. Williams",
      specialty: "Orthopedics",
      patients: 150,
      appointments: 500,
      experience: 12,
      qualifications: "MD, FAAOS",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bio: "Dr. Williams specializes in sports medicine and joint replacement surgeries, helping patients regain mobility and improve their quality of life.",
    },
    {
      id: 4,
      name: "Dr. Brown",
      specialty: "Neurology",
      patients: 100,
      appointments: 350,
      experience: 18,
      qualifications: "MD, PhD",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "Dr. Brown is a leading neurologist with expertise in treating a wide range of neurological disorders and conducting groundbreaking research.",
    },
    {
      id: 5,
      name: "Dr. Taylor",
      specialty: "Dermatology",
      patients: 180,
      appointments: 550,
      experience: 8,
      qualifications: "MD, FAAD",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      bio: "Dr. Taylor is a skilled dermatologist specializing in both medical and cosmetic dermatology, helping patients achieve healthy and beautiful skin.",
    },
    {
      id: 6,
      name: "Dr. Alex",
      specialty: "Gynecologist",
      patients: 350,
      appointments: 650,
      experience: 10,
      qualifications: "MD, PhD",
      image: "https://randomuser.me/api/portraits/men/94.jpg",
      bio: "Dr. Alex is an experienced gynecologist providing comprehensive women's health care, specializing in reproductive health, pregnancy care, and preventive medicine for women of all ages.",
    },
    {
      id: 7,
      name: "Dr. Wilson",
      specialty: "General practitioner",
      patients: 250,
      appointments: 620,
      experience: 12,
      qualifications: "MD, PHD",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      bio: "Dr. Wilson is an experienced general practitioner providing comprehensive primary care and preventive medicine for patients of all ages.",
    },
    {
      id: 8,
      name: "Dennis Schmidt",
      specialty: "Anesthesiologist",
      patients: 350,
      appointments: 750,
      experience: 17,
      qualifications: "MD, PHD",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
      bio: "Dr. Dennis Schmidt is an experienced general practitioner providing comprehensive primary care and preventive medicine for patients of all ages.",
    },
    {
      id: 9,
      name: "Reginald Bennett",
      specialty: "Ophthalmologist",
      patients: 150,
      appointments: 450,
      experience: 15,
      qualifications: "MD, PHD",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      bio: "Dr. Reginald Bennett is an experienced general practitioner providing comprehensive primary care and preventive medicine for patients of all ages.",
    },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <ScrollToTop />
        <div className="bg-light min-h-screen font-sans text-primary">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctors" element={<Doctors doctors={doctors} />} />
              <Route
                path="/doctor/:id"
                element={<DoctorProfile doctors={doctors} />}
              />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <ScrollToTopButton />
          <Footer />
        </div>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
