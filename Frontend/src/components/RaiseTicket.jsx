import React, { useState } from 'react';

function RaiseTicketModal({ closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles.slice(0, 5)); 
  };

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-slate-800">Raise a Ticket</h2>
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mb-2 p-2 border rounded w-full text-black" />
        
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" className="mb-2 p-2 border rounded w-full text-black" required />
        
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject *" className="mb-2 p-2 border rounded w-full text-black" required />
        
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description *" className="mb-2 p-2 border rounded w-full h-24 text-black" required></textarea>

        <div className="mb-2">
          <label className="block text-sm mb-1 text-slate-500">Upload files (max 5):</label>
          <input type="file" multiple onChange={handleFileChange} className="block w-full text-sm text-slate-500" />
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={closeModal} className="bg-slate-500 text-white py-1 px-4 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-slate-500 text-white py-1 px-4 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicketModal;
