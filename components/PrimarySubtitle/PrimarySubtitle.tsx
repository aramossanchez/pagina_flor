import React from 'react';

interface PrimarySubtitleProps {
  text: string;
  className?: string;
}

export default function PrimarySubtitle({
  text,
  className,
}: PrimarySubtitleProps) {
  return (
    <h1
      className={`${className} md:text-2xl text-xl font-bold text-quaternaryColor`}
    >
      {text}
    </h1>
  );
}
