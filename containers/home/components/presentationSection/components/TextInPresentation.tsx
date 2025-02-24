'use client';

import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import PrimaryTitle from '@/components/PrimaryTitle/PrimaryTitle';
import useScreenObserver from '@/hooks/useScreenObserver';
import React from 'react';

export default function TextInPresentation() {
  const { isOnScreen, refCallback } = useScreenObserver();

  const blockStyle = isOnScreen ? 'animate-showLeftToRight' : 'opacity-0';

  return (
    <div
      ref={refCallback}
      className={`${blockStyle} mobile:max-w-[50%] max-w-full gap-y-10 flex flex-col mobile:items-start items-center`}
    >
      <PrimaryTitle
        text="Brisbane Somatic Psychotherapy & Counselling"
        className="mobile:text-left text-center"
      />
      <p className="mobile:text-left text-center">
        A safe space to understand the impact of unresolved developmental trauma
        that your body, mind and heart are still holding.
      </p>
      <PrimaryButtonComponent text="TRABAJA CONMIGO" />
    </div>
  );
}
