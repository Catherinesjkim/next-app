// A heavy component with a lot of markup, styles, and JS code
import React from 'react'
import Image from 'next/image';
import biskky from '@/public/images/Biskky_logo_10DEC2023.webp';

const HeavyComponent = () => {
  return (
    <>
      <div>My Heavy Component</div><Image
        src={biskky}
        alt="Biskky Logo"
        fill
        className='object-contain'
        sizes='100vw' />
    </>
  )
}

export default HeavyComponent