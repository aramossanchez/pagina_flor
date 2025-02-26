import React from 'react';
import WhatsappButton from '@/components/WhatsappButton/WhatsappButton';
import PresentationSection from './components/presentationSection/PresentationSection';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import { Separator } from '@/components/svgs/Separator';
import ServicesSection from './components/ServicesSection/ServicesSection';
import SimpleClaim from './components/SimpleClaim/SimpleClaim';
import GoToTopButton from '@/components/GoToTopButton/GoToTopButton';

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
      <SimpleClaim />
      <ServicesSection />
      <GoToTopButton />
      <WhatsappButton />
    </section>
  );
}
