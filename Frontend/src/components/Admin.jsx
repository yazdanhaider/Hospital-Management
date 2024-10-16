import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { FaUserShield, FaChartBar, FaUserMd, FaUserInjured, FaCalendarCheck, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(22);
        doc.text("Health Nest - Hospital Report", 20, 20);
        doc.setFontSize(16);
        doc.text("Generated on: " + new Date().toLocaleDateString(), 20, 30);
        doc.setFontSize(14);
        doc.text("Total Patients: 1000", 20, 50);
        doc.text("Total Doctors: 50", 20, 60);
        doc.text("Total Appointments: 1500", 20, 70);
        doc.text("Revenue: $500,000", 20, 80);
        doc.save("hospital_report.pdf");
    };

    const statsData = [
        { icon: FaUserMd, title: 'Doctors', count: 50, color: 'bg-blue-500' },
        { icon: FaUserInjured, title: 'Patients', count: 1000, color: 'bg-green-500' },
        { icon: FaCalendarCheck, title: 'Appointments', count: 1500, color: 'bg-yellow-500' },
        { icon: FaChartBar, title: 'Revenue', count: '$500,000', color: 'bg-purple-500' },
    ];

    return (
        <div className="bg-light min-h-screen p-8">
            <h1 className="text-4xl font-bold text-primary mb-8">Admin Dashboard</h1>
            
            {!isLoggedIn ? (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                            <FaUserShield className="mr-2" /> Login
                        </button>
                    </form>
                </motion.div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={index}
                                className={`${stat.color} rounded-lg shadow-lg p-6 text-white`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <stat.icon className="text-4xl mb-4" />
                                <h3 className="text-xl font-semibold">{stat.title}</h3>
                                <p className="text-3xl font-bold">{stat.count}</p>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={generatePDF}
                            className="bg-accent text-primary px-6 py-3 rounded-full font-bold flex items-center"
                        >
                            <FaFilePdf className="mr-2" /> Generate PDF Report
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-6 py-3 rounded-full font-bold"
                        >
                            Logout
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Admin;
