import React from 'react';
import CardService from './components/CardService';

export default function ServicesSection() {
  const cardsData = [
    {
      image: 'servicio_1.png',
      title: 'Terapia individual',
      description:
        'Breve, eficaz, profesional y sin perder la calidez, dirigida a aquellas personas que quieren trabajar en problemas concretos o que simplemente buscan amarse mejor.',
    },
    {
      image: 'servicio_2.png',
      title: 'Terapia de pareja',
      description:
        'Recomendada para aquellas personas que quieran disfrutar de una relación sana, recuperar la ilusión o encontrar fuerzas para terminar la relación.',
    },
    {
      image: 'servicio_3.png',
      title: 'Terapia Online',
      description:
        'Modalidad para cualquier persona que no pueda desplazarse o prefiera un ambiente conocido en el que estar relajado para poder abrirse con el terapeuta.',
    },
  ];
  return (
    <section className="section_style bg-primaryColor">
      <div className="flex flex-row gap-8 justify-center desktop:flex-nowrap flex-wrap">
        {cardsData.map((card, index) => (
          <CardService
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
