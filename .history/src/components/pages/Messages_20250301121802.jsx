import React, { useState } from 'react';
import message from '../../assets/images/message.png';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="mb-4">
        <p className="text-lg font-semibold">Search instructors</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="h-64 overflow-y-auto p-2 border-b">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-gray-200 text-black'}`}
              >
                {msg.text}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-10">
              <img src={message} alt="No messages" className="w-20 h-20" />
              <p className="text-gray-700 text-xl mt-4 bg-gray-200 text-center p-4 rounded-lg underline">
                No message yet.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
