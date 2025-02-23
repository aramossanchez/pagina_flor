import React from 'react';
import { WhatsappIcon } from '../icons/WhatsappIcon';

export default function WhatsappButton() {
  return (
    <button className="fixed bottom-2 right-2 z-50 rounded-full bg-whatsappColor p-2 cursor-pointer">
      <WhatsappIcon size={40} fill="var(--background)" />
    </button>
  );
}
