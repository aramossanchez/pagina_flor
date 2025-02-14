import { Montserrat } from 'next/font/google';
import React from 'react';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  style: ['normal'],
});

interface TitleComponentProps {
  text: string;
}

export default function TitleComponent({ text }: TitleComponentProps) {
  return (
    <h1
      className={`${montserrat.className} text-5xl text-center font-semibold leading-snug`}
    >
      {text}
    </h1>
  );
}
