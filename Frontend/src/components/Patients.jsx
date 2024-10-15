import React, { useState } from 'react';

const Patients = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: "John Doe", age: 35, gender: "Male", contact: "123-456-7890" },
        { id: 2, name: "Jane Smith", age: 28, gender: "Female", contact: "987-654-3210" },
    ]);
    const [patientName, setPatientName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');

    // Handle patient form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPatient = {
            id: patients.length + 1,
            name: patientName,
            age: parseInt(age),
            gender,
            contact,
        };
        setPatients([...patients, newPatient]);
        resetForm();
        alert("Patient added successfully!");
    };

    // Reset form fields
    const resetForm = () => {
        setPatientName('');
        setAge('');
        setGender('');
        setContact('');
    };

    // Delete patient
    const deletePatient = (id) => {
        if (confirm("Are you sure you want to delete this patient?")) {
            setPatients(patients.filter(patient => patient.id !== id));
            alert("Patient deleted successfully!");
        }
    };

    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-14">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Patient Management</h2>
            <form id="patient-form" className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Patient Name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Contact Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
                <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 transition duration-200">
                    Add Patient
                </button>
            </form>

            <h3 className="text-lg font-semibold mt-6 text-gray-800">Patients List</h3>
            <table className="mt-2 w-full bg-white border rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Age</th>
                        <th className="p-2 text-left">Gender</th>
                        <th className="p-2 text-left">Contact</th>
                        <th className="p-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id} className="border-b">
                            <td className="p-2">{patient.name}</td>
                            <td className="p-2">{patient.age}</td>
                            <td className="p-2">{patient.gender}</td>
                            <td className="p-2">{patient.contact}</td>
                            <td className="p-2">
                                <button
                                    onClick={() => deletePatient(patient.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Patients;
