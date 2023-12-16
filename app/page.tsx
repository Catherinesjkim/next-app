// This is our Home page.
'use client';

import { useState } from 'react';
import dynamic from "next/dynamic";

// This is how you lazy load a component
const HeavyComponent = dynamic(
  () => import('./components/HeavyComponent'),
  { 
    ssr: false,
    loading: () => <p>Loading...</p>});

// Showing the Heavy Component dynamically
export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main className='relative h-screen'>
      <h1>Welcome to Biskky Website!</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  )
}

