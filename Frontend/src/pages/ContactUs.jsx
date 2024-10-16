import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">We'd love to hear from you. Please feel free to reach out with any questions or concerns.</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p>support@hms.com</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Phone</h2>
        <p>+1 (555) 123-4567</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>123 Healthcare Street, Medical City, HC 12345</p>
      </div>
    </div>
  );
};

export default ContactUs;
