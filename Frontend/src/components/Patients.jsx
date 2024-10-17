import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const Patients = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: "John Doe", age: 35, gender: "Male", contact: "123-456-7890" },
        { id: 2, name: "Jane Smith", age: 28, gender: "Female", contact: "987-654-3210" },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: '', contact: '' });

    const handleInputChange = (e) => {
        setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const nameRegex = /^[A-Za-z][A-Za-z0-9 ]{3,}$/;
        const contactRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

        if (!nameRegex.test(newPatient.name)) {
            alert('Invalid name. Name should start with a letter and be at least 4 characters long.');
            return false;
        }

        if (newPatient.age < 1 || newPatient.age > 120) {
            alert('Age should be a number between 1 and 120.');
            return false;
        }

        if (!contactRegex.test(newPatient.contact)) {
            alert('Invalid contact number. It should follow the format XXX-XXX-XXXX.');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
            setNewPatient({ name: '', age: '', gender: '', contact: '' });
            setShowForm(false);
        }
    };

    const deletePatient = (id) => {
        setPatients(patients.filter(patient => patient.id !== id));
    };

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-light min-h-screen p-4 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8">Patient Management</h1>
            
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-primary px-6 py-2 rounded-full font-bold flex items-center"
                    onClick={() => setShowForm(!showForm)}
                >
                    <FaUserPlus className="mr-2" />
                    {showForm ? 'Cancel' : 'Add New Patient'}
                </motion.button>
                <div className="relative w-full sm:w-auto">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search patients..."
                        className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {showForm && (
                <motion.form
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-6 rounded-lg shadow-lg mb-8"
                    onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Patient Name"
                            className="p-2 border border-gray-300 rounded"
                            value={newPatient.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            className="p-2 border border-gray-300 rounded"
                            value={newPatient.age}
                            onChange={handleInputChange}
                            required
                        />
                        <select
                            name="gender"
                            className="p-2 border border-gray-300 rounded"
                            value={newPatient.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input
                            type="tel"
                            name="contact"
                            placeholder="Contact Number"
                            className="p-2 border border-gray-300 rounded"
                            value={newPatient.contact}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="mt-4 bg-accent text-primary px-6 py-2 rounded-full font-bold">
                        Add Patient
                    </button>
                </motion.form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPatients.map((patient, index) => (
                    <motion.div
                        key={patient.id}
                        className={`bg-white p-6 rounded-lg shadow-lg ${
                            index === 0 ? 'md:col-span-2' : ''
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <h3 className="text-xl font-semibold text-primary mb-2">{patient.name}</h3>
                        <p className="text-gray-600 mb-1">Age: {patient.age}</p>
                        <p className="text-gray-600 mb-1">Gender: {patient.gender}</p>
                        <p className="text-gray-600 mb-4">Contact: {patient.contact}</p>
                        <div className="flex justify-end">
                            <button className="text-blue-500 mr-2">
                                <FaEdit />
                            </button>
                            <button className="text-red-500" onClick={() => deletePatient(patient.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Patients;
