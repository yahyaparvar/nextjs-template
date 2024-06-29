import React, { useState } from 'react';

// Import FormEvent explicitly from react
import { FormEvent } from 'react';

export const CreateClanForm = () => {
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
      <button onClick={openModal} className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Clan
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-6">
            {/* Semi-transparent background with backdrop-filter */}
            <div className="absolute inset-0 bg-black-800 opacity-75 backdrop-filter backdrop-blur-lg"></div>
            <div className="relative bg-white rounded-lg max-w-md w-full p-8">
              <div className="text-black text-xl font-bold border-b border-gray-500 mb-4">
                Create a Clan
              </div>
              <form onSubmit={handleSubmit} name="clan_name" id="clan_name">
                <div className="mb-4">
                  <label htmlFor="clan_name" className="block text-gray-700 text-sm font-bold mb-2">Clan Name:</label>
                  <input
                    className="border rounded w-full py-2 px-3 text-white-700"
                    type="text"
                    name="clan_name"
                    id="clan_name"
                    placeholder="Clan Name"
                  />
                </div>
                <div className="mb-4 text-center">
                  <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full">
                    Create
                  </button>
                </div>
              </form>
              <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
