import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHospital, FaUserMd, FaCalendarCheck, FaHeartbeat, FaAmbulance, FaLaptopMedical } from 'react-icons/fa';
import Support from './Support';


const Home = () => {
    const features = [
        { icon: FaHospital, title: 'State-of-the-art Facilities', description: 'Experience healthcare in our modern, well-equipped facilities.' },
        { icon: FaUserMd, title: 'Expert Medical Staff', description: 'Our team of experienced doctors and nurses provide top-notch care.' },
        { icon: FaCalendarCheck, title: 'Easy Appointments', description: 'Book and manage your appointments with just a few clicks.' },
        { icon: FaHeartbeat, title: "Comprehensive Care", description: "From preventive care to complex treatments, we've got you covered." },
        { icon: FaAmbulance, title: '24/7 Emergency Services', description: 'Round-the-clock emergency care for your peace of mind.' },
        { icon: FaLaptopMedical, title: 'Telemedicine', description: 'Get expert medical advice from the comfort of your home.' },
    ];

    return (
      <div className="bg-light min-h-screen">
        <section className="hero bg-primary text-light py-12 sm:py-20 px-4 rounded-3xl mx-2 sm:mx-4 mt-4">
          <div className="container mx-auto text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Health Nest
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Advanced Healthcare Management Solution
            </motion.p>
            <Link to="/signup">
              <motion.button
                className="bg-accent text-primary font-bold py-2 px-6 rounded-full hover:bg-light hover:text-primary transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>
          <div>
            <Support/>
          </div>

        </section>

        <section className="features py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary">
              Our Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-3xl shadow-lg text-center feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.01 }}
                  whileHover={{ y: -10 }}
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
          </div>
        </section>

        <section className="about-us bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              About Health Nest
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Hospital"
                  className="rounded-3xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-gray-600 mb-4 text-[1.1rem] font-montserrat ">
                  Health Nest is a cutting-edge healthcare management system
                  designed to streamline medical processes and enhance patient
                  care. Our platform integrates advanced technology with medical
                  expertise to provide a seamless experience for both healthcare
                  providers and patients.
                </p>
                <p className="text-gray-600 mb-4 text-[1.1rem] font-montserrat">
                  With Health Nest, you can easily manage appointments, access
                  medical records, and communicate with your healthcare team.
                  We're committed to improving healthcare accessibility and
                  efficiency, ensuring that you receive the best possible care.
                </p>
                <Link to="/about-us">
                  <motion.button
                    className="bg-accent text-primary font-bold py-2 px-6 rounded-full hover:bg-primary hover:text-accent transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              What Our Patients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  text: "Health Nest has revolutionized how I manage my healthcare. It's so easy to use!",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Jane Smith",
                  text: "I love how I can access all my medical information in one place. Great job, Health Nest!",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Mike Johnson",
                  text: "Booking appointments has never been easier. Health Nest is a game-changer!",
                  image: "https://randomuser.me/api/portraits/men/22.jpg",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-3xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-600 mb-4 text-center">
                    "{testimonial.text}"
                  </p>
                  <p className="text-primary font-semibold text-center">
                    - {testimonial.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta bg-primary text-light py-20 rounded-3xl mx-4 mb-4">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">
              Join Health Nest today and experience the future of healthcare
              management.
            </p>
            <Link to="/signup">
              <motion.button
                className="bg-accent text-primary font-bold py-2 px-6 rounded-full hover:bg-light hover:text-primary transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up Now
              </motion.button>
            </Link>
          </div>
        </section>
        <div>
        </div>
      </div>
    );
};

export default Home;
