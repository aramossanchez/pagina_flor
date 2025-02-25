import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import PrimarySubtitle from '@/components/PrimarySubtitle/PrimarySubtitle';
import { basePath } from '@/config/config';
import Image from 'next/image';
import React from 'react';

interface CardServiceProps {
  image: string;
  title: string;
  description: string;
}

export default function CardService({
  image,
  title,
  description,
}: CardServiceProps) {
  return (
    <div className="flex flex-col w-[400px] bg-background shadow-xl rounded-lg p-8 gap-y-6">
      <div className="flex sm:flex-row flex-col gap-x-4 items-center">
        <Image
          src={`${basePath}images/${image}`}
          alt="Foto principal"
          width={500}
          height={500}
          className="w-[100px]"
        />
        <PrimarySubtitle text={title} />
      </div>
      <p>{description}</p>
      <div className="w-full flex flex-row justify-center h-full items-end">
        <PrimaryButtonComponent text="MÁS INFORMACIÓN" />
      </div>
    </div>
  );
}
