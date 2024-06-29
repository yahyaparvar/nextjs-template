import React, { useState } from 'react';
import { FormEvent } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export const ChatComponent = ({ closeModal }: { closeModal: () => void }) => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: userMessage, sender: 'user' }]);
      setUserMessage('');
    }
  };

  const toggleChatbox = () => {
    // Close modal when chatbox is toggled closed
    closeModal();
  };

  return (
    <div>
      <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
        <p className="text-lg font-semibold">Admin Bot</p>
        <button className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400" onClick={toggleChatbox}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div id="chatbox" className="p-4 h-80 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
            <p className={`rounded-lg py-2 px-4 inline-block ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex">
        <input
          id="user-input"
          type="text"
          placeholder="Type a message"
          className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userMessage}
          onChange={handleUserInput}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button
          id="send-button"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export const BombaclatChat = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clanNameInput = event.currentTarget.elements.namedItem('clan_name') as HTMLInputElement;
    if (clanNameInput) {
      const clanName = clanNameInput.value;
      alert(clanName);
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal} className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Chat
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-6">
            <div className="absolute inset-0 bg-black-800 opacity-75 backdrop-filter backdrop-blur-lg"></div>
            <div className="relative bg-white rounded-lg max-w-md w-full p-8">
              <ChatComponent closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
