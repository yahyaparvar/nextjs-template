import React, { useState } from 'react';

// Import FormEvent explicitly from react
import { FormEvent } from 'react';

export const Initiatives = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the background content
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Restore scrolling on the background content
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Access the value from the input field using event.target
    const clanNameInput = event.currentTarget.elements.namedItem('clan_name') as HTMLInputElement;
    if (clanNameInput) {
      const clanName = clanNameInput.value;
      alert(clanName); // Alert the value entered in the clan name input field
      closeModal(); // Close modal after form submission
    }
  };

  // clanData
  return (
    <div>
      <button onClick={openModal} className="bg-emerald-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">
        Initiatives
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-6">
            {/* Semi-transparent background with backdrop-filter */}
            <div className="absolute inset-0 bg-black-800 opacity-75 backdrop-filter backdrop-blur-lg"></div>
            <div className="relative bg-white rounded-lg max-w-md w-full p-8">
                <img src='/pushup.jpeg'/>
                <div className='text-center mt-3 text-orange-900'>
                    <a href="https://www.thepushupchallenge.com.au/?utm_campaign=pushforbetter&gad_source=1&gclid=CjwKCAjw4f6zBhBVEiwATEHFVnBMpjYVejJtfwSPdkenA6LF8CMpXJbhFfj_dyLu8tJfeHrewKr-oBoCWRoQAvD_BwE" target="blank">
                        Sign up with your clan!
                    </a>
                </div>
              <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
