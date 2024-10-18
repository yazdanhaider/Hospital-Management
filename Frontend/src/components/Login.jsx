import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here you would typically send the form data to your backend
        try {
            // replace with backend url
            const url = 'http://localhost:5173/api/register'

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(formData)
            });

            const result = await res.json();

            if(result.success){
                localStorage.setItem("token", result.jwtToken);
                localStorage.setItem("email",result.email);
                localStorage.setItem("user", result.name);
                localStorage.setItem("isSignin", true);
                setTimeout(() => {
                    navigate('/home')
                }, 500);
            }else{
                alert("Error occured");
            }

        } catch (e) {
            console.log(e.toString());
            alert(e.toString());
        }

        console.log('Login attempt:', formData);

        // Reset form after submission
        setFormData({
            email: '',
            password: '',
        });
        // You might want to redirect the user or show a success message here
    };

    return (
        <div id='login' className="bg-light min-h-screen flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
            >
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">Login to Health Nest</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                                placeholder="youremail@example.com"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-accent text-primary font-bold py-2 px-4 rounded-md hover:bg-primary hover:text-accent transition duration-300 flex items-center justify-center"
                    >
                        <FaSignInAlt className="mr-2" />
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-accent hover:underline">
                        Sign up
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
