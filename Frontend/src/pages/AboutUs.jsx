import React from 'react';
import { FaHeartbeat, FaCogs, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion for animation

const AboutUs = () => {
  const features = [
    {
      icon: FaHeartbeat,
      title: 'Our Mission',
      description: 'To deliver healthcare solutions that ensure better patient care through efficiency and technological advancement.',
    },
    {
      icon: FaCogs,
      title: 'Our Vision',
      description: 'We aim to revolutionize healthcare management by developing tools that healthcare professionals can rely on.',
    },
    {
      icon: FaUsers,
      title: 'Our Values',
      description: 'We are dedicated to providing innovative, reliable, and user-friendly solutions for healthcare providers worldwide.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-light p-8 rounded-lg mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-secondary mb-4">
          Hospital Management System (HMS) is a cutting-edge solution designed to streamline healthcare operations and improve patient care.
        </p>
        <p className="text-lg text-secondary">
          Our mission is to revolutionize healthcare management through innovative technology solutions that enhance efficiency, reduce errors, and improve patient outcomes.
        </p>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}  // Hover effect
          >
            <feature.icon className="text-4xl sm:text-5xl text-accent mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="bg-light p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="team-member bg-white p-6 shadow-md rounded-lg text-center border border-accent"
            whileHover={{ scale: 1.05 }}  // Hover effect on team member cards
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-primary">Dr. John Doe</h3>
            <p className="text-secondary">Chief Medical Officer</p>
          </motion.div>
          <motion.div
            className="team-member bg-white p-6 shadow-md rounded-lg text-center border border-accent"
            whileHover={{ scale: 1.05 }}  // Hover effect on team member cards
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-primary">Jane Smith</h3>
            <p className="text-secondary">Lead Software Engineer</p>
          </motion.div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
