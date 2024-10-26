import React, { useState } from 'react';
import RaiseTicketModal from './RaiseTicket';

function SupportTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center bg-slate-300 p-6 rounded-lg shadow-md" style={{ width: '350px', height: '350px' }}>
        <div>
          <h2 className="font-semibold mb-2">Got Questions?</h2>
          <input type="text" placeholder="Search for help" className="placeholder:text-sm rounded-md pl-2 w-full shadow-md h-8 mb-2 cursor-pointer" />
          <h5 className="mt-2 text-slate-800 font-medium mb-2">Suggested articles</h5>
          <h3 className="mt-2 text-white font-medium text-sm mb-2 p-1 border rounded-md shadow-md bg-slate-400 cursor-pointer">Release Notes</h3>
          <h3 className="mt-2 text-white font-medium text-sm mb-2 p-1 border rounded-md shadow-md bg-slate-400 cursor-pointer">How to create availability / Slots for doctor/service</h3>
          <h3 className="mt-2 text-white font-medium text-sm mb-2 p-1 border rounded-md shadow-md bg-slate-400 cursor-pointer">Steps to download Daily or Monthly Appointment Report</h3>
        </div>
        <div>
          <p onClick={openModal} className="border rounded-md bg-slate-700 shadow-md mt-4 p-2 cursor-pointer">Raise a ticket</p>
        </div>
        {isModalOpen && <RaiseTicketModal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default SupportTab;
