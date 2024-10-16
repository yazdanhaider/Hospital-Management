import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.svg';

const Header = () => {
    const isTablet = useMediaQuery("only screen and (max-width: 768px)");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'Appointments', path: '/appointments' },
        { title: 'Patients', path: '/patients' },
        { title: 'Doctors', path: '/doctors' },
        { title: 'Admin', path: '/admin' },
    ];

    return (
        <header className="bg-primary text-light p-4 sticky top-0 z-10 shadow-lg transition duration-300">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center text-2xl font-bold text-accent hover:text-light transition duration-300">
                    <img src={Logo} alt="Health Nest Logo" className="h-8 w-auto mr-2" />
                    Health Nest
                </Link>
                {isTablet ? (
                    <>
                        <button onClick={toggleMenu} className="text-light focus:outline-none">
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-16 left-0 w-full bg-primary p-4 shadow-lg">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="block py-2 text-light hover:text-accent transition duration-300"
                                        onClick={toggleMenu}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex space-x-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="text-light hover:text-accent transition duration-300"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
