import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaTwitter, href: 'https://x.com/YazdanH7', color: 'text-blue-400' },
    { icon: FaFacebookF, href: 'https://www.facebook.com/yazdan.yazdankhan.7/', color: 'text-blue-600' },
    { icon: FaInstagram, href: 'https://www.instagram.com/yazdan.haider23/', color: 'text-pink-500' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yazdan-haider', color: 'text-blue-700' },
  ];

  const footerLinks = [
    { title: 'About Us', to: '/about-us' },
    { title: 'Services', to: '/services' },
    { title: 'Privacy Policy', to: '/privacy-policy' },
    { title: 'Terms of Service', to: '/terms-of-service' },
    { title: 'Contact Us', to: '/contact-us' },
  ];

  return (
    <footer className="bg-secondary text-light font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">Health Nest</h3>
            <p className="text-[1rem]">
              Revolutionizing healthcare management with cutting-edge technology and compassionate care.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank" 
                  className="text-light hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 my-auto ml-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {footerLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ y: -3 }}>
                  <Link
                    to={link.to}
                    className="flex items-center text-light hover:text-accent transition-colors duration-300 text-[0.95rem]"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
          <p>
            © {currentYear} Health Nest. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center">
            Made with <FaHeart className="text-accent mx-1" /> by Health Nest Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
