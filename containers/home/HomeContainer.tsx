import React from 'react';
import PresentationSection from './components/PresentationSection/PresentationSection';
import WhatsappButton from '@/components/WhatsappButton/WhatsappButton';

export default function HomeContainer() {
  return (
    <section className="container_style">
      <PresentationSection />
      <WhatsappButton />
    </section>
  );
}
