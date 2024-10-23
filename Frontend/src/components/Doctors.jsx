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
                        className="bg-white p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300 relative cursor-pointer"
                        onClick={() => handleOpenModal(doctor)} // Open modal when clicking on the card
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
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering the card click event
                                    navigate(`/appointments?doctorId=${doctor.id}`);
                                }}
                            >
                                <FaCalendarPlus className="mr-2" />
                                Book Appointment
                            </motion.button>
                        </div>

                        {/* 'i' button in bottom-right corner */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-2 right-2 bg-accent text-black p-1.5 rounded-full flex items-center justify-center shadow-md"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering the card click event
                                handleOpenModal(doctor); // Open modal on 'i' button click
                            }}
                        >
                            <FaInfoCircle className="text-sm" />
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            {/* Doctor Modal */}
            {isModalOpen && selectedDoctor && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleCloseModal} // Close modal when clicking outside
                >
                    <div 
                        className="bg-white rounded-lg p-6 max-w-md mx-auto relative z-10"
                        onClick={(e) => e.stopPropagation()} // Prevent click events from closing the modal
                    >
                        <button className="absolute top-2 right-2 text-gray-600" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-32 h-32 rounded-full object-cover mb-4" />
                            <h1 className="text-2xl font-bold text-primary">{selectedDoctor.name}</h1>
                            <p className="text-xl text-gray-600">{selectedDoctor.specialty}</p>
                            <p className="text-gray-700 mb-2">Experience: {selectedDoctor.experience} years</p>
                            <p className="text-gray-700 mb-2">Patients: {selectedDoctor.patients}</p>
                            <p className="text-gray-700 mb-4">{selectedDoctor.bio}</p>
                            <button 
                                className="bg-accent text-primary px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-accent transition duration-300 flex items-center justify-center"
                                onClick={() => {
                                    navigate(`/appointments?doctorId=${selectedDoctor.id}`);
                                    handleCloseModal(); // Close the modal after navigating
                                }}
                            >
                                <FaCalendarPlus className="mr-2" />
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Doctors;
