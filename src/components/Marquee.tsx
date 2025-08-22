// components/Marquee.tsx
import Image from 'next/image';
import React from 'react';

export default function Marquee() {
  const content = (
    <span className='flex items-center gap-6 sm:gap-8 px-6 sm:px-8 text-white text-xl sm:text-3xl md:text-[50px] font-semibold'>
      App Development
      <Image
        src='/Marquee.png'
        alt='separator'
        width={40}
        height={40}
        className='w-5 sm:w-8 md:w-[60px] h-auto'
      />
      Website Development
      <Image
        src='/Marquee.png'
        alt='separator'
        width={40}
        height={40}
        className='w-5 sm:w-8 md:w-[60px] h-auto'
      />
      Pixel Perfect
      <Image
        src='/Marquee.png'
        alt='separator'
        width={40}
        height={40}
        className='w-5 sm:w-8 md:w-[60px] h-auto'
      />
      React Expert
      <Image
        src='/Marquee.png'
        alt='separator'
        width={40}
        height={40}
        className='w-5 sm:w-8 md:w-[60px] h-auto'
      />
      {/* Spacer fleksibel */}
      <span className='inline-block min-w-[clamp(120px,12vw,280px)]'></span>
    </span>
  );

  return (
    <div className='relative w-full h-[64px] sm:h-[80px] md:h-[108px] overflow-hidden bg-[#149BB0] mx-auto'>
      {/* Kontainer animasi */}
      <div className='absolute flex items-center h-full animate-marquee-right whitespace-nowrap'>
        {/* Gandakan lebih banyak supaya tidak ada gap */}
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <React.Fragment key={i}>{content}</React.Fragment>
          ))}
      </div>
    </div>
  );
}
