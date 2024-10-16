import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserMd, FaSearch, FaEye, FaCalendarPlus } from 'react-icons/fa';

const Doctors = ({ doctors }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBookAppointment = (doctorId) => {
        // Navigate to the appointments page with the selected doctor's ID
        navigate(`/appointments?doctorId=${doctorId}`);
    };

    return (
        <div className="bg-light min-h-screen p-8">
            <h1 className="text-4xl font-bold text-primary mb-8">Our Doctors</h1>
            
            <div className="mb-8 flex justify-end">
                <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search doctors..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor, index) => (
                    <motion.div
                        key={doctor.id}
                        className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                            index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                        }`}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                        <h3 className="text-xl font-semibold text-primary text-center mb-2">{doctor.name}</h3>
                        <p className="text-gray-600 text-center mb-4">{doctor.specialty}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                            <span>Patients: {doctor.patients}</span>
                            <span>Experience: {doctor.experience} years</span>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-accent text-primary px-4 py-2 rounded-full font-bold flex items-center"
                                onClick={() => navigate(`/doctor/${doctor.id}`)}
                            >
                                <FaEye className="mr-2" />
                                View Profile
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-primary text-accent px-4 py-2 rounded-full font-bold flex items-center"
                                onClick={() => handleBookAppointment(doctor.id)}
                            >
                                <FaCalendarPlus className="mr-2" />
                                Book Appointment
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
