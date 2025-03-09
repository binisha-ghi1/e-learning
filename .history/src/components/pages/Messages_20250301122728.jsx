import React, { useState } from 'react';
import message from '../../assets/images/message.png';
import nancy from "../../assets/images/nancy.png";
import henry from "../../assets/images/henry.png";
import charlotte from "../../assets/images/charlotte.png";
import ethan from "../../assets/images/ethan.png";
import jordan from "../../assets/images/jordan.png";

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [conversations, setConversations] = useState({});
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = [
    { name: "Nancy White", image: nancy },
    { name: "Henry Smith", image: henry },
    { name: "Charlotte Johnson", image: charlotte },
    { name: "Ethan Brown", image: ethan },
    { name: "Jordan Davis", image: jordan }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '' && selectedContact) {
      setConversations((prev) => ({
        ...prev,
        [selectedContact.name]: [...(prev[selectedContact.name] || []), { text: input, sender: 'user' }],
      }));
      setInput('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar with conversations */}
      <div className="w-1/3 bg-gray-100 p-4 border-r">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <p className="text-gray-500 mb-2">Pinned</p>
        {filteredContacts.map((contact, index) => (
          <div
            key={index}
            className={`flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer ${selectedContact?.name === contact.name ? 'bg-gray-300' : ''}`}
            onClick={() => handleSelectContact(contact)}
          >
            <img src={contact.image} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
            <p className="text-gray-800">{contact.name}</p>
          </div>
        ))}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            <div className="p-4 border-b text-gray-800 font-semibold">{selectedContact.name}</div>
            <div className="flex-1 flex flex-col p-4 space-y-2 overflow-y-auto">
              {conversations[selectedContact.name]?.length > 0 ? (
                conversations[selectedContact.name].map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-gray-200 text-black'}`}
                  >
                    {msg.text}
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center flex-1">
                  <img src={message} alt="No messages" className="w-20 h-20" />
                  <p className="text-gray-500 text-lg mt-4">Start messaging</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <img src={message} alt="No messages" className="w-20 h-20" />
            <p className="text-gray-500 text-lg mt-4">Select a contact to start messaging</p>
          </div>
        )}

        {/* Message input */}
        {selectedContact && (
          <div className="p-4 border-t flex items-center gap-2">
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
        )}
      </div>
    </div>
  );
};

export default Messages;



