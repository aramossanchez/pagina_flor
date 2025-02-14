import { Montserrat } from 'next/font/google';
import React from 'react';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
});

interface SubtitleComponentProps {
  text: string;
}

export default function SubtitleComponent({ text }: SubtitleComponentProps) {
  return (
    <h1
      className={`${montserrat.className} text-2xl text-center font-semibold`}
    >
      {text}
    </h1>
  );
}
