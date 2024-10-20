import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarPlus, FaInfoCircle } from 'react-icons/fa';
import DoctorModal from './DoctorProfile'; // Import the modal component

const Doctors = ({ doctors }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(null); // State to manage selected doctor
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOpenModal = (doctor) => {
        setSelectedDoctor(doctor);
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDoctor(null); // Reset the selected doctor
    };

    return (
        <div className="bg-light min-h-screen p-4 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8">Our Doctors</h1>
            
            <div className="mb-6 sm:mb-8 flex justify-end">
                <div className="relative w-full sm:w-auto">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search doctors..."
                        className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredDoctors.map((doctor) => (
                    <motion.div
                        key={doctor.id}
                        className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300 relative"
                    >
                        <img src={doctor.image} alt={doctor.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 object-cover" />
                        <h3 className="text-lg sm:text-xl font-semibold text-primary text-center mb-2">{doctor.name}</h3>
                        <p className="text-gray-600 text-center mb-4">{doctor.specialty}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                            <span>Patients: {doctor.patients}</span>
                            <span>Experience: {doctor.experience} years</span>
                        </div>

                        {/* Book Appointment button */}
                        <div className="flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-primary text-accent px-4 py-2 rounded-full font-bold flex items-center justify-center"
                                onClick={() => navigate(`/appointments?doctorId=${doctor.id}`)}
                            >
                                <FaCalendarPlus className="mr-2" />
                                Book Appointment
                            </motion.button>
                        </div>

                        {/* 'i' button in bottom-left corner */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute bottom-4 left-4 bg-accent text-black p-3 rounded-full flex items-center justify-center shadow-md"
                            onClick={() => handleOpenModal(doctor)} // Open modal on 'i' button click
                        >
                            <FaInfoCircle />
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            {/* Doctor Modal */}
            <DoctorModal 
                doctor={selectedDoctor} 
                onClose={handleCloseModal} 
                isOpen={isModalOpen} 
            />
        </div>
    );
};

export default Doctors;
