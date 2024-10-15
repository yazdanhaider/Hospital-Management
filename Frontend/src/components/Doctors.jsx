import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Doctors = () => {
    const navigate = useNavigate();
        const [doctors, setDoctors] = useState([
            { id: 1, name: "Dr. Smith", specialty: "Cardiology", patients: 0 },
            { id: 2, name: "Dr. Johnson", specialty: "Pediatrics", patients: 0 },
            { id: 3, name: "Dr. Williams", specialty: "Orthopedics", patients: 0 },
            { id: 4, name: "Dr. Brown", specialty: "Neurology", patients: 0 },
            { id: 5, name: "Dr. Taylor", specialty: "Dermatology", patients: 0 },
            { id: 6, name: "Dr. Wilson", specialty: "General Medicine", patients: 0 },
        ]);

    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                        <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                        <p className="text-gray-600">Specialty: {doctor.specialty}</p>
                        <p className="text-gray-600">Patients: {doctor.patients}</p>
                        <button
                            onClick={() => navigate('/profile')}
                            className="mt-4 w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-500 transition duration-200"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Doctors;
