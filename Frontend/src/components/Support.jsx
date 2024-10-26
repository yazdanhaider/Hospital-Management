import React, { useState } from 'react';
import SupportTab from './SupportTab';

function Support() {
  const [supportTabOpen, setSupportTabOpen] = useState(false);

  const handleClick = () => {
    setSupportTabOpen(!supportTabOpen);
  };

  return (
    <div
      className=" fixed bottom-10 left-10 flex justify-end z-50"
      id="my_component"
    >
      <div className="shadow-md bg-amber-400 rounded-2xl  ">
        <h3
          onClick={handleClick}
          className="mb-4 font-bold p-2 h-5 text-white text-sm flex justify-center cursor-pointer"
        >
          Support
        </h3>
        <span>{supportTabOpen && <SupportTab />}</span>
      </div>
    </div>
  );
}

export default Support;
