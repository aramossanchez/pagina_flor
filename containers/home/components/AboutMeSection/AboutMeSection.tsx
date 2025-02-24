import React from 'react';
import PrimarySubtitle from '@/components/PrimarySubtitle/PrimarySubtitle';
import ImageInAboutMe from './components/ImageInAboutMe';

export default function AboutMeSection() {
  return (
    <section className="section_style bg-primaryColor">
      <div className="flex mobile:flex-row flex-col justify-between items-start gap-y-20">
        <ImageInAboutMe />
        <div className="flex flex-col gap-y-6 mobile:max-w-[50%] max-w-full">
          <PrimarySubtitle
            text="Hola, soy Flor Escribano, psicóloga con habilitación sanitaria,
            especializada en la intervención sobre procesos de duelo, trauma y
            apego."
          />
          <p>
            Aunque mi enfoque de trabajo tiene una base{' '}
            <strong>cognitivo-conductual</strong>, gracias al estudio continuo
            de distintos métodos y técnicas, trabajo bajo una{' '}
            <strong>perspectiva integradora</strong> que me permite responder
            específicamente a las necesidades de la persona interviniendo en el
            plano <strong>emocional, conductual, cognitivo y físico</strong>.
          </p>
          <p>
            Compagino la práctica en la clínica privada junto con el
            acompañamiento psicológico desde distintas asociaciones a pacientes
            de cáncer o familiares. Esto me ha permitido{' '}
            <strong>
              aprender a acompañar e intervenir en los momentos más difíciles
              del ser humano
            </strong>
            . En el transcurso de mi trayectoria profesional he acompañado a
            muchas personas en sus procesos terapéuticos. Esto, me ha permitido
            sentirme especialmente hábil en la intervención en{' '}
            <strong>
              ansiedad, depresión, gestión del estrés, autoestima y vinculación
              afectiva
            </strong>
            .
          </p>
          <p className="font-bold">
            Me gusta definirme como una persona apasionada por lo que hace,
            cercana, creativa y con una gran conciencia social
          </p>
        </div>
      </div>
    </section>
  );
}
