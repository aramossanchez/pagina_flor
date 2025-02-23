import React from 'react';

interface PrimaryTitleProps {
  text: string;
  className?: string;
}

export default function PrimaryTitle({ text, className }: PrimaryTitleProps) {
  return (
    <h1
      className={`${className} md:text-5xl text-4xl font-bold text-quaternaryColor`}
    >
      {text}
    </h1>
  );
}
