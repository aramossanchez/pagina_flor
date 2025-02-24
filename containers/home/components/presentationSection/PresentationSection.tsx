import React from 'react';
import TextInPresentation from './components/TextInPresentation';
import ImageInPresentation from './components/ImageInPresentation';

export default function PresentationSection() {
  return (
    <section className="section_style bg-gradient-to-b from-background via-primaryColor to-secondaryColor">
      <article>
        <div className="flex mobile:flex-row flex-col justify-between w-full items-center">
          <TextInPresentation />
          <ImageInPresentation />
        </div>
      </article>
    </section>
  );
}
