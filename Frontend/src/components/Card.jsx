import React, { useState ,useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCashRegister,
  FaHospital,
  FaUserMd,
  FaCalendarCheck,
  FaHeartbeat,
  FaAmbulance,
  FaLaptopMedical,
} from "react-icons/fa";

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

 
  const cards = [
    {
      icon: FaAmbulance,
      title: "Patient Management",
      description:
        "Manage patient records, treatment histories, and essential health information.",
    },
    {
      icon: FaCalendarCheck,
      title: "Appointment Scheduling",
      description:
        "Organize, schedule, and track patient appointments with automated reminders.",
    },
    {
      icon: FaHeartbeat,
      title: "Electronic Health Records (EHR)",
      description:
        "Digitally store, access, and manage comprehensive patient medical records.",
    },
    {
      icon: FaCashRegister,
      title: "Billing and Invoicing",
      description:
        "Streamline billing, generate invoices, and manage healthcare payment processes.",
    },
    {
      icon: FaHospital,
      title: "Inventory Management",
      description:
        "Monitor medical supplies, equipment stock, and automate reordering processes",
    },
    {
      icon: FaUserMd,
      title: "Staff Management",
      description:
        "Track staff schedules, performance, and workload for efficient operations.",
    },
    {
      icon: FaChartLine,
      title: "Reporting and Analytics",
      description:
        "Generate data-driven insights and reports to improve decision-making.",
    },
    {
      icon: FaLaptopMedical,
      title: "Telemedicine Integration",
      description:
        "Enable remote consultations, patient care, and video conferencing with doctors.",
    },
  ];

  const updateCardsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCardsPerPage(3);  // 3 cards for large screens
    } else if (width >= 640) {
      setCardsPerPage(2);  // 2 cards for small/medium screens
    } else {
      setCardsPerPage(1);  // 1 card for mobile
    }
  };

  // Update the cardsPerPage when the window is resized
  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // Automatic sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + cardsPerPage >= cards.length ? 0 : prevIndex + cardsPerPage
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [cardsPerPage, cards.length]);

  // Ensure the current index doesn't go out of bounds when screen size changes
  useEffect(() => {
    if (currentIndex + cardsPerPage > cards.length) {
      setCurrentIndex(Math.max(0, cards.length - cardsPerPage));
    }
  }, [cardsPerPage, currentIndex, cards.length]);

  return (
    <div className="mt-2">
      <div className="w-11/12 m-auto">
        <div className="relative">
          {/* Responsive grid: based on cardsPerPage state */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`}>
            {cards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-lg text-center feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.01 }}
                whileHover={{ y: -10 }}
              >
                <card.icon className="text-4xl sm:text-5xl text-accent mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
