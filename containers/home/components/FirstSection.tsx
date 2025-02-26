'use client';

import { MessageIcon } from '@/components/icons/MessageIcon';
import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';
import TitleComponent from '@/components/TitleComponent/TitleComponent';
import useScreenObserver from '@/hooks/useScreenObserver';
import React from 'react';

export default function FirstSection() {
  const { isOnScreen, refCallback } = useScreenObserver();

  const titleStyle = isOnScreen ? 'animate-showTopToCenter' : 'opacity-0';

  return (
    <section className="section_style">
      <div>
        <header ref={refCallback} className={`${titleStyle}`}>
          <TitleComponent text="Soy Flor, psicóloga especializada en acompañamiento emocional y bienestar" />
        </header>
        <SubtitleComponent text="Acompaño a personas en sus procesos de cambio, duelo y autoconocimiento, ofreciendo un espacio seguro para sanar y crecer" />

        <div className="w-full flex flex-row justify-center">
          <PrimaryButtonComponent
            text="Contacta conmigo"
            icon={<MessageIcon size={16} />}
          />
        </div>
      </div>
    </section>
  );
}
