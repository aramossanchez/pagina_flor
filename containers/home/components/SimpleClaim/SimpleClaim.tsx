'use client';

import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import TitleComponent from '@/components/TitleComponent/TitleComponent';
import useScreenObserver from '@/hooks/useScreenObserver';
import React from 'react';

export default function SimpleClaim() {
  const { isOnScreen, refCallback } = useScreenObserver();

  const blockStyle = isOnScreen ? 'animate-showTopToCenter' : 'opacity-0';

  return (
    <section className="section_style bg-secondaryColor">
      <div
        className={`${blockStyle} flex flex-col items-center gap-y-8`}
        ref={refCallback}
      >
        <TitleComponent text="Healing is not a linear process" />
        <p className="text-center">
          My role is to support you in understanding the impacts of trauma. As a
          trauma therapist, I work somatically with the body, brain, and nervous
          system to help guide you in effectively processing unresolved trauma
          so that you can live life in a way that is meaningful and fulfilling
          to you.
        </p>
        <PrimaryButtonComponent text="RESERVA UNA SESIÓN" />
      </div>
    </section>
  );
}
