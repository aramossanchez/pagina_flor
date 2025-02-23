import React from 'react';
import WhatsappButton from '@/components/WhatsappButton/WhatsappButton';
import PresentationSection from './components/presentationSection/PresentationSection';

export default function HomeContainer() {
  return (
    <section className="container_style">
      <PresentationSection />
      <WhatsappButton />
    </section>
  );
}
