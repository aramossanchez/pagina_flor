'use client';

import { basePath } from '@/config/config';
import useScreenObserver from '@/hooks/useScreenObserver';
import Image from 'next/image';
import React from 'react';

export default function ImageInAboutMe() {
  const { isOnScreen, refCallback } = useScreenObserver();

  const blockStyle = isOnScreen ? 'animate-showLeftToRight' : 'opacity-0';
  return (
    <Image
      ref={refCallback}
      src={`${basePath}images/foto_aboutme.jpg`}
      alt="Foto principal"
      width={500}
      height={500}
      className={`${blockStyle} shadow-xl rounded-t-full rounded-md mobile:max-w-[50%] max-w-full mobile:order-1 order-2`}
    />
  );
}
