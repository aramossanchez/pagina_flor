import React from 'react';

interface TitleComponentProps {
  text: string;
  className?: string;
}

export default function TitleComponent({
  text,
  className,
}: TitleComponentProps) {
  return (
    <h1
      className={`${className} md:text-5xl text-4xl font-bold text-quaternaryColor text-center`}
    >
      {text}
    </h1>
  );
}
