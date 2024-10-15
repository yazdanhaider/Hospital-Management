import { useState } from "react";
import { Link } from "react-router-dom"; // Update import
import { useMediaQuery } from "../hooks/useMediaQuery";

const Header = () => {
    const isTablet = useMediaQuery("only screen and (max-width: 768px)");
    const [isMenuOpen, setIsMenuOpen] = useState(false);// Use useNavigate instead of useHistory

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 sticky top-0 z-10 shadow-lg transition duration-300">
            <nav className="flex justify-between items-center">
                <div className="text-lg font-bold transition-transform transform hover:scale-105">HMS</div>
                {isTablet ? (
                    <>
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg
                                className="w-6 h-6 transition-transform hover:scale-110"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <ul className="absolute top-16 left-0 w-full bg-gradient-to-r from-green-500 to-green-700 p-4 rounded shadow-lg transition-transform transform scale-95 opacity-100">
                                <li className="transition duration-300 hover:bg-green-600 rounded">
                                    <Link to="/" className="block p-2 hover:text-gray-300">Home</Link>
                                </li>
                                <li className="transition duration-300 hover:bg-green-600 rounded">
                                    <Link to="/appointments" className="block p-2 hover:text-gray-300">Appointments</Link>
                                </li>
                                <li className="transition duration-300 hover:bg-green-600 rounded">
                                    <Link to="/patients" className="block p-2 hover:text-gray-300">Patients</Link>
                                </li>
                                <li className="transition duration-300 hover:bg-green-600 rounded">
                                    <Link to="/doctors" className="block p-2 hover:text-gray-300">Doctors</Link>
                                </li>
                                <li className="transition duration-300 hover:bg-green-600 rounded">
                                    <Link to="/admin" className="block p-2 hover:text-gray-300">Admin</Link>
                                </li>
                            </ul>
                        )}
                    </>
                ) : (
                    <ul className="flex space-x-5">
                        <li className="transition duration-300 hover:bg-green-600 rounded">
                            <Link to="/" className="hover:text-gray-300 transition duration-300 py-4 px-2">Home</Link>
                        </li>
                        <li className="transition duration-300 hover:bg-green-600 rounded">
                            <Link to="/appointments" className="hover:text-gray-300 transition duration-300 py-4 px-2">Appointments</Link>
                        </li>
                        <li className="transition duration-300 hover:bg-green-600 rounded">
                            <Link to="/patients" className="hover:text-gray-300 transition duration-300 py-4 px-2">Patients</Link>
                        </li>
                        <li className="transition duration-300 hover:bg-green-600 rounded">
                            <Link to="/doctors" className="hover:text-gray-300 transition duration-300 py-4 px-2">Doctors</Link>
                        </li>
                        <li className="transition duration-300 hover:bg-green-600 rounded">
                            <Link to="/admin" className="hover:text-gray-300 transition duration-300 py-4 px-2">Admin</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
