import React, { useState } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export const ChatComponent = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(true);
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() !== '') {
      setMessages(prevMessages => [...prevMessages, { text: userMessage, sender: 'user' }]);
      setUserMessage('');
    }
  };

  return (
    <div>
      {isChatboxOpen && (
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full fixed bottom-16 right-4">
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
      )}
    </div>
  );
};

export const ChatModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the background content
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Restore scrolling on the background content
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        Open Chat
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-6">
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative bg-white rounded-lg max-w-md w-full p-8">
              <div className="text-black text-xl font-bold border-b border-gray-500 mb-4">
                Chat Bot
              </div>
              {/* Render the ChatComponent here */}
              <ChatComponent />
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
