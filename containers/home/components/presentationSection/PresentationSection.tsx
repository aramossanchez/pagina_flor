import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import PrimaryTitle from '@/components/PrimaryTitle/PrimaryTitle';
import { basePath } from '@/config/config';
import Image from 'next/image';
import React from 'react';

export default function PresentationSection() {
  return (
    <section className="section_style bg-gradient-to-b from-background via-primaryColor to-secondaryColor">
      <article>
        <div className="flex mobile:flex-row flex-col justify-between w-full items-center">
          <div className="mobile:max-w-[50%] max-w-full gap-y-10 flex flex-col mobile:items-start items-center">
            <PrimaryTitle
              text="Brisbane Somatic Psychotherapy & Counselling"
              className="mobile:text-left text-center"
            />
            <p className="mobile:text-left text-center">
              A safe space to understand the impact of unresolved developmental
              trauma that your body, mind and heart are still holding.
            </p>
            <PrimaryButtonComponent text="TRABAJA CONMIGO" />
          </div>
          <Image
            src={`${basePath}images/foto_principal.png`}
            alt="Foto principal"
            width={500}
            height={500}
          />
        </div>
      </article>
    </section>
  );
}
