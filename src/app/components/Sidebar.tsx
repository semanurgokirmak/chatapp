
import React, { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
}

interface SidebarProps {
  onSelectContact: (contact: Contact) => void;
  selectedContact: Contact | null; // Seçili kişi bilgisi prop olarak alıyorum
}

const contacts: Contact[] = [
  { id: 1, name: 'Aysu', lastMessage: 'ok' },
  { id: 2, name: 'Ayşe', lastMessage: 'yok yok getiriyorum kvhdf' },
  { id: 3, name: 'Mehmet', lastMessage: 'selam' },
  { id: 4, name: 'Fatma', lastMessage: 'Akşam yemeğe çıkalım mı?' },
  { id: 5, name: 'Ali', lastMessage: 'Kahveye gel bana' },
  { id: 6, name: 'Burak', lastMessage: 'naber' },
  { id: 7, name: 'Canan', lastMessage: 'yemekte ne var?' },
  { id: 8, name: 'Derya', lastMessage: 'havalar da bozdu bu aralar' },
  { id: 9, name: 'Selim', lastMessage: 'yarın sana gelcemm' },
  { id: 10, name: 'Mert', lastMessage: 'kiminle konuşuyon' },
];

export default function Sidebar({ onSelectContact, selectedContact }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState<string>(''); 

  // Arama işlemi
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) // Küçük harf dönüşümü ile arama yapıyormuş
  );

  return (
    <div className="w-1/3 bg-slate-300 p-4 flex flex-col h-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-8 mt-8 rounded-lg bg-white text-black"
        value={searchTerm} // Arama terimi güncelliyormuş
        onChange={(e) => setSearchTerm(e.target.value)} // Her değişimde state güncelliyormuş
      />
      <div className="overflow-y-auto flex-grow">
        {filteredContacts.map((contact) => ( // Filtrelenmiş kişiler gösteriliyormuş
          <div
            key={contact.id}
            onClick={() => onSelectContact(contact)}
            className="mb-2 px-2"
          >
            <div
              className={`p-3 rounded-lg shadow-lg transition duration-150 ${
                selectedContact?.id === contact.id
                  ? 'bg-purple-500 text-white' // Seçili kişi ise arka plan mor olucak
                  : 'bg-white hover:bg-gray-200' // Seçili değilse beyaz arka plan
              }`}
            >
              <div className="flex items-center h-12">
                <div className="w-14 h-14 bg-slate-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold">{contact.name}</div>
                  <div className="text-sm">
                    {contact.lastMessage}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
