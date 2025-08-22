// components/Journey.tsx
'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

type JourneyItem = {
  id: string;
  title: string;
  period: string;
  desc: string;
  logo: string;
  company: string;
};

const journeys: JourneyItem[] = [
  {
    id: 'airbnb',
    title: 'Frontend Developer',
    period: '2025 - Present',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icon/airbnb.png',
    company: 'airbnb',
  },
  {
    id: 'dribbble',
    title: 'Frontend Developer',
    period: '2025 - Present',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icon/dribbble.png',
    company: 'dribbble',
  },
  {
    id: 'zoom',
    title: 'Frontend Developer',
    period: '2025 - Present',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icon/zoom.png',
    company: 'zoom',
  },
  {
    id: 'netflix',
    title: 'Frontend Developer',
    period: '2025 - Present',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icon/netflix.png',
    company: 'netflix',
  },
  {
    id: 'paypal',
    title: 'Frontend Developer',
    period: '2025 - Present',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icon/paypal.png',
    company: 'paypal',
  },
  {
    id: 'adobe',
    title: 'Frontend Developer',
    period: '2025 - Present',
    desc: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    logo: '/icon/adobe.png',
    company: 'adobe',
  },
];

export default function Journey() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const scroll = (dir: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 600;
      sliderRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const updateProgress = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const scrolled = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(scrolled);
    }
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateProgress);
    return () => {
      el.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <section className='relative w-full bg-black text-white select-none'>
      <div className='max-w-[1440px] mx-auto py-12 px-5 sm:px-8 md:px-[80px]'>
        <h2 className='text-3xl md:text-4xl font-bold mb-2'>
          My Journey in Tech
        </h2>
        <p className='text-gray-400 mb-8'>
          From small gigs to real-world challenges — each experience helped me
          grow as a builder and problem-solver.
        </p>
        {/* Slider */}
        <div
          ref={sliderRef}
          className='flex gap-6 overflow-x-auto scroll-smooth no-scrollbar'
        >
          {journeys.map((item) => (
            <div
              key={item.id}
              className='flex-shrink-0 w-[280px] sm:w-[400px] md:w-[564px] h-[336px] border border-gray-700 p-6 flex flex-col justify-between'
            >
              <div>
                <h3 className='text-lg sm:text-xl font-semibold'>
                  {item.title}
                </h3>
                <p className='text-gray-400 mb-4 border-b border-gray-700 pb-1'>
                  {item.period}
                </p>
                <p className='text-gray-300 text-xs sm:text-sm leading-relaxed'>
                  {item.desc}
                </p>
              </div>

              <div className='mt-4 flex items-center'>
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={128}
                  height={48}
                  className='object-contain'
                />
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className='w-full h-[2px] bg-gray-800 mt-6 relative'>
          <div
            className='h-[2px] bg-white absolute top-0 left-0 transition-all duration-300'
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ⛔️ Hilangin scrollbar bawaan */}
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE & Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

        {/* Navigation */}
        <div className='flex gap-4 mt-6'>
          <button
            onClick={() => scroll('left')}
            className='px-6 py-2 border border-gray-600 text-gray-300 hover:bg-gray-800'
          >
            Prev
          </button>
          <button
            onClick={() => scroll('right')}
            className='px-6 py-2 border border-gray-600 text-gray-300 hover:bg-gray-800'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
