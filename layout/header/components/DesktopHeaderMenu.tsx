import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import { HEADER_LINKS } from '@/utils/constants';
import React from 'react';
import LinkHeader from './LinkHeader';

export default function DesktopHeaderMenu() {
  return (
    <div className="flex flex-row gap-x-10 items-center">
      {HEADER_LINKS.map((link) => {
        return (
          <LinkHeader key={link.label} label={link.label} url={link.url} />
        );
      })}
      <PrimaryButtonComponent text="CONTACTA" />
    </div>
  );
}
