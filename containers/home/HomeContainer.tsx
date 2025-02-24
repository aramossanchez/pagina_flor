import React from 'react';
import WhatsappButton from '@/components/WhatsappButton/WhatsappButton';
import PresentationSection from './components/presentationSection/PresentationSection';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import { Separator } from '@/components/icons/Separator';

export default function HomeContainer() {
  return (
    <section className="container_style">
      <div className="w-full relative">
        <PresentationSection />
        <div className="absolute mobile:bottom-[-5%] bottom-[-10px] w-full z-40">
          <Separator fill="var(--primaryColor)" />
        </div>
      </div>
      <AboutMeSection />
      <WhatsappButton />
    </section>
  );
}
