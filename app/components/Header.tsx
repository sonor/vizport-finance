import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li>
            <h1>
              <Link href="/">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Image
                    src="/logo.png" // path relative to the public folder
                    alt="Vizport Logo"
                    width={30}
                    height={30}
                  />
                  <span>vizport.finance</span>
                </div>
              </Link>
            </h1>
          </li>
        </ul>
      </nav>
    </header>
  );
}
