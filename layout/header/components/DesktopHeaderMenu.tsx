import PrimaryButtonComponent from '@/components/primaryButtonComponent/PrimaryButtonComponent';
import { HEADER_LINKS } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

export default function DesktopHeaderMenu() {
  return (
    <div className="flex flex-row gap-x-10 items-center">
      {HEADER_LINKS.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.url}
            className="text-sm hover:text-quaternaryColor font-semibold duration-200"
          >
            {link.label}
          </Link>
        );
      })}
      <PrimaryButtonComponent text="CONTACTA" />
    </div>
  );
}
