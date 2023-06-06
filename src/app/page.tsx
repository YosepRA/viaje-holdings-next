'use client';

import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import Navbar from 'components/Navbar';

export default function Home() {
  return (
    <div>
      <Container>
        <h1>Body</h1>
      </Container>
      <Navbar />
    </div>
  );
}
