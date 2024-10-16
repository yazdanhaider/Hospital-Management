import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaTwitter, href: '#', color: 'text-blue-400' },
    { icon: FaFacebookF, href: '#', color: 'text-blue-600' },
    { icon: FaInstagram, href: '#', color: 'text-pink-500' },
    { icon: FaLinkedinIn, href: '#', color: 'text-blue-700' },
  ];

  const footerLinks = [
    { title: 'About Us', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms of Service', href: '#' },
    { title: 'Contact Us', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">HMS</h3>
            <p className="text-gray-400 text-xs">
              Revolutionizing healthcare management with cutting-edge technology and compassionate care.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`${link.color} hover:text-white transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-xs">
          <p>
            © {currentYear} Hospital Management System. All rights reserved.
          </p>
          <p className="mt-1 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by HMS Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
