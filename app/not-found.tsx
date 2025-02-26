import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import React from 'react';

export default function NotFoundPage() {
  return (
    <div>
      <span>Parece que aquí no hay nada. Prueba a volver al inicio.</span>
      <PrimaryButtonComponent text="VOLVER AL INICIO" />
    </div>
  );
}
