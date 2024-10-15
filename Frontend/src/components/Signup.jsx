import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/images/customer2-avatar.png";

const Signup = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: selectedFile,
        gender: '',
        role: 'admin',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        alert("Account created successfully!");
    };

    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
            <form onSubmit={submitHandler} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Enter your email-id"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <div className="flex items-center justify-between space-y-0">
                    <label className="text-gray-800 font-semibold">
                        Are you a:
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="ml-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="customer">Admin</option>
                            <option value="professional">Doctor</option>
                        </select>
                    </label>
                    <label className="text-gray-800 font-semibold">
                        Gender:
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="ml-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </label>
                </div>
                <div className="flex items-center gap-3">
                    <figure className="w-14 h-14 rounded-full border-2 border-solid border-blue-500 flex items-center justify-center">
                        <img src={avatar} alt="Avatar" className="w-full h-full rounded-full" />
                    </figure>
                    <div className="relative w-[130px]">
                        <input
                            type="file"
                            name="photo"
                            id="customFile"
                            accept=".jpg, .png"
                            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileInputChange}
                        />
                        <label
                            htmlFor="customFile"
                            className="w-full bg-blue-300 text-white text-center p-2 rounded-lg cursor-pointer transition duration-200 hover:bg-blue-600"
                        >
                            Upload Photo
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-green-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-200"
                >
                    Sign Up
                </button>
                <p className="text-center">
                    Already have an account?{' '}
                    <Link to="/admin" className="text-blue-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Signup;
