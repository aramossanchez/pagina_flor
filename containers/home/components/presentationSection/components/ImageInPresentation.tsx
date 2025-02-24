'use client';

import Image from 'next/image';
import React from 'react';
import { basePath } from '@/config/config';
import useScreenObserver from '@/hooks/useScreenObserver';

export default function ImageInPresentation() {
  const { isOnScreen, refCallback } = useScreenObserver();

  const blockStyle = isOnScreen ? 'animate-showRightToLeft' : 'opacity-0';
  return (
    <Image
      ref={refCallback}
      className={blockStyle}
      src={`${basePath}images/foto_principal.png`}
      alt="Foto principal"
      width={500}
      height={500}
    />
  );
}
