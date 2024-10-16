import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaUserMd, FaCalendar, FaCertificate, FaUsers, FaCalendarPlus } from "react-icons/fa";

const DoctorProfile = ({ doctors }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const handleBookAppointment = () => {
    navigate(`/appointments?doctorId=${doctor.id}`);
  };

  return (
    <div className="bg-light min-h-screen p-8">
      <Link to="/doctors" className="text-accent hover:underline mb-4 inline-block">&larr; Back to Doctors</Link>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6" />
          <div>
            <h1 className="text-3xl font-bold text-primary">{doctor.name}</h1>
            <p className="text-xl text-gray-600">{doctor.specialty}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <FaUserMd className="text-accent mr-2" />
            <span>Experience: {doctor.experience} years</span>
          </div>
          <div className="flex items-center">
            <FaCalendar className="text-accent mr-2" />
            <span>Appointments: {doctor.appointments}</span>
          </div>
          <div className="flex items-center">
            <FaCertificate className="text-accent mr-2" />
            <span>Qualifications: {doctor.qualifications}</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="text-accent mr-2" />
            <span>Patients: {doctor.patients}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{doctor.bio}</p>
        <button 
          className="bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-accent transition duration-300 flex items-center justify-center"
          onClick={handleBookAppointment}
        >
          <FaCalendarPlus className="mr-2" />
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
