import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to an API
    console.log(formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Contact Information Cards */}
        <div className="card bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-gray-700">support@hms.com</p>
        </div>
        <div className="card bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-gray-700">+1 (555) 123-4567</p>
        </div>
        <div className="card bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p className="text-gray-700">123 Healthcare Street, Medical City, HC 12345</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
