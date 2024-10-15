import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    // PDF generation function
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("Hospital Management System Report", 10, 10);
        doc.text(`Total Patients: 1`, 10, 20);
        doc.text(`Total Doctors: 2`, 10, 30);
        doc.text(`Total Appointments: 3`, 10, 40);

        doc.save("hospital_report.pdf");
    };

    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Panel</h2>
            {!isLoggedIn ? (
                <form id="admin-login" className="flex flex-col space-y-4" onSubmit={handleLogin}>
                    <input
                        type="text"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 transition duration-200">
                        Login
                    </button>
                </form>
            ) : (
                <div id="admin-dashboard" className="text-center">
                    <h3 className="text-lg font-semibold mb-4">Welcome, Admin</h3>
                    <div className='flex flex-col'>
                        <button
                            onClick={generatePDF}
                            className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 transition duration-200"
                        >
                            Generate PDF Report
                        </button>
                        <button
                            onClick={handleLogout}
                            className="mt-4 text-red-600 hover:underline"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Admin;
