
import React, { useState } from 'react';

interface Message {
  id: number;
  sender: 'user' | 'contact';
  text: string;
}

interface Contact {
  id: number;
  name: string;
}

interface ChatWindowProps {
  selectedContact: Contact | null;
}

// Mesaj verilerini kişi kimliklerine göre tutuyorum
const messagesData: { [key: number]: Message[] } = {
  1: [
    { id: 1, sender: 'user', text: 'Hi bro' },
    { id: 2, sender: 'contact', text: 'napıyosun' },
    { id: 3, sender: 'user', text: 'İyi' },
    { id: 4, sender: 'user', text: 'işten geldim sen' },
    { id: 5, sender: 'contact', text: 'Bne de iyiyim beybisi' },
    { id: 6, sender: 'user', text: 'akşam çıkıyo muyuz' },
    { id: 7, sender: 'contact', text: 'çıkalım da nereye gidicez' },
    { id: 8, sender: 'user', text: 'bakarız ona ya' },
    { id: 9, sender: 'contact', text: 'bak da haber ver bana o zamann' },
    { id: 10, sender: 'user', text: 'ok' },
  ],
  2: [
    { id: 11, sender: 'user', text: 'Toplantı saat kaçta?' },
    { id: 12, sender: 'contact', text: '14:00' },
    { id: 13, sender: 'user', text: 'tamam az gecikebilirim ben haberin olsun, sorarlarsa yolda dersin' },
    { id: 14, sender: 'contact', text: 'tamam acele etmene gerek yok zaten' },
    { id: 15, sender: 'contact', text: 'daha gelen giden yok' },
    { id: 16, sender: 'user', text: 'heh iyi tamam' },
    { id: 17, sender: 'contact', text: 'benim dosyaları unutmadın inş kldfdıhgıdf' },
    { id: 18, sender: 'user', text: 'yok yok getiriyorum kvhdf' },
  ],
  3: [
    { id: 19, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 20, sender: 'contact', text: 'Harika!' },
  ],
  4: [
    { id: 21, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 22, sender: 'contact', text: 'Harika!' },
  ],
  5: [
    { id: 23, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 24, sender: 'contact', text: 'Harika!' },
  ],
  6: [
    { id: 25, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 26, sender: 'contact', text: 'Harika!' },
  ],
  7: [
    { id: 27, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 28, sender: 'contact', text: 'Harika!' },
  ],
  8: [
    { id: 29, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 30, sender: 'contact', text: 'Harika!' },
  ],
  9: [
    { id: 31, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 32, sender: 'contact', text: 'Harika!' },
  ],
  10: [
    { id: 33, sender: 'user', text: 'Projeyi bitirdim.' },
    { id: 34, sender: 'contact', text: 'Harika!' },
  ],
  
};

export default function ChatWindow({ selectedContact }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');
  
  // Seçili kişiye ait mesajları getiriyorum
  const messages = selectedContact ? messagesData[selectedContact.id] : [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() !== '' && selectedContact) {
      const newMessageObj = {
        id: messages.length + 1,
        sender: 'user' as 'user',
        text: newMessage,
      };
      // Yeni mesajı geçici olarak mesaj listesine ekliyorum
      messagesData[selectedContact.id] = [
        ...messagesData[selectedContact.id],
        newMessageObj,
      ];
      setNewMessage('');
    }
  };

  return (
    <div className="w-2/3 flex flex-col">
      <div className="bg-gray-800 p-4 flex items-center">
        <div className="w-10 h-10 bg-purple-500 rounded-full mr-3"></div>
        <div className="text-white font-semibold">
          {selectedContact?.name || 'Seçili kişi yok'}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-700 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 bg-gray-800">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className="flex-1 p-2 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white p-2 rounded-r-lg hover:bg-purple-600 focus:outline-none"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}
