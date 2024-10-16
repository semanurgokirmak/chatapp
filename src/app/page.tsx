
'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
}

export default function Home() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-r from-black to-purple-700">
      <div className="flex w-[1000px] h-[600px] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
        
        <Sidebar 
          onSelectContact={setSelectedContact} 
          selectedContact={selectedContact} 
        />
        <ChatWindow selectedContact={selectedContact} />
      </div>
    </main>
  );
}
