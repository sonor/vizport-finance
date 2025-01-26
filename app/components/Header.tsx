import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#0a0a0a' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li>
            <Link href="/">vizport.finance</Link>
          </li>

        </ul>
      </nav>
    </header>
  );

}