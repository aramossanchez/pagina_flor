'use client';

import React from 'react';
import { WhatsappIcon } from '../icons/WhatsappIcon';
import { useWindowSize } from '@/hooks/useWindowSize';
import { MOBILE_WIDTH } from '@/utils/constants';

export default function WhatsappButton() {
  const { width } = useWindowSize();
  return (
    <button className="fixed bottom-2 right-4 z-50 rounded-full bg-whatsappColor p-2 cursor-pointer flex flex-row gap-x-2 items-center">
      {width > MOBILE_WIDTH && (
        <span className="text-background font-bold">Escríbeme</span>
      )}
      <WhatsappIcon size={20} fill="var(--background)" />
    </button>
  );
}
