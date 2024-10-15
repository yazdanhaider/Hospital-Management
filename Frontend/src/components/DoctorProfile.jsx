import React from "react";

const DoctorProfile = ({ name, specialization, experience, degrees, bio, image }) => {
  return (
    <div className="flex flex-col items-center bg-gray-50 py-8 px-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      
      {/* Doctor's Image */}
      <img
        className="w-40 h-40 object-cover rounded-full mb-4"
        src={image}
        alt={`Dr. ${name}`}
      />
      {/* Doctor's Name */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">Dr. {name}</h1>
      {/* Doctor's Specialization */}
      <p className="text-xl text-gray-600 mb-4">{specialization}</p>
      {/* Experience */}
      <p className="text-lg text-gray-500 mb-2">Experience: {experience} years</p>
      {/* Degrees */}
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Degrees:</h2>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        {degrees.map((degree, index) => (
          <li key={index}>{degree}</li>
        ))}
      </ul>
      {/* Bio */}
      <p className="text-gray-600 mb-4 text-center">{bio}</p>
    </div>
  );
};

export default DoctorProfile;
