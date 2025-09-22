import React, { useState } from 'react';

const mockResponses = [
  "Hello! How can I assist you today?",
  "That's an interesting question. Let me think...",
  "I'm here to help with any queries about NaTeSA!",
  "Feel free to ask me anything about events, resources, or membership.",
  "Great question! Here's some information...",
  "I'm still learning, but I'll do my best to help!",
  "Thanks for reaching out. What would you like to know?",
  "Let me connect you with the right resources.",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm the NaTeSA assistant. How can I help you?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);

      // Mock response
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const botMessage = { text: randomResponse, sender: 'bot' };
      setTimeout(() => {
        setMessages(prev => [...prev, botMessage]);
      }, 1000); // Simulate delay

      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors animate-pulse"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50 flex flex-col">
          {/* Header */}
          <div className="bg-[var(--primary-color)] text-white p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-medium">NaTeSA Assistant</span>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-2 rounded-lg max-w-xs ${
                  msg.sender === 'user' ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-200 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-300">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <button
                onClick={sendMessage}
                className="bg-[var(--primary-color)] text-white px-4 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;