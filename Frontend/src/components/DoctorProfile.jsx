import React from 'react';
import { FaCalendarPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DoctorModal = ({ doctor, onClose, isOpen }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    if (!isOpen) return null; // Return null if the modal is not open

    const handleBookAppointment = () => {
        navigate(`/appointments?doctorId=${doctor.id}`); // Navigate to the appointments page
        onClose(); // Close the modal after navigating
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto relative z-10">
                <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
                    &times;
                </button>
                <div className="flex flex-col items-center">
                    <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full object-cover mb-4" />
                    <h1 className="text-2xl font-bold text-primary">{doctor.name}</h1>
                    <p className="text-xl text-gray-600">{doctor.specialty}</p>
                    <p className="text-gray-700 mb-2">Experience: {doctor.experience} years</p>
                    <p className="text-gray-700 mb-2">Patients: {doctor.patients}</p>
                    <p className="text-gray-700 mb-4">{doctor.bio}</p>
                    <button 
                        className="bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-accent transition duration-300 flex items-center justify-center"
                        onClick={handleBookAppointment} // Handle the click to navigate
                    >
                        <FaCalendarPlus className="mr-2" />
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorModal;
