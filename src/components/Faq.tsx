'use client';
import { useState } from 'react';
import Image from 'next/image';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes, I am open to freelance and remote projects depending on scope and timeline.',
  },
  {
    id: 2,
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    id: 3,
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Yes, I can convert designs from Figma or Sketch into clean, responsive code.',
  },
  {
    id: 4,
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes, I often work with backend developers to integrate APIs and ensure smooth communication between frontend and backend.',
  },
  {
    id: 5,
    question: 'Are you available for full-time roles?',
    answer:
      'Yes, I am open to full-time opportunities where I can contribute my skills, grow within a team, and take on impactful projects.',
  },
  {
    id: 6,
    question: 'Do you provide ongoing support after project delivery?',
    answer:
      'Yes, I can provide maintenance and support packages after project completion.',
  },
  {
    id: 7,
    question: 'Can you help optimize website performance?',
    answer:
      'Yes, I can optimize loading speed, accessibility, and SEO for better performance.',
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqData.length) % faqData.length);
  };

  return (
    <section className='w-full bg-black py-12'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[120px] relative flex flex-col'>
        {/* Title */}
        <div className='mb-6 text-left'>
          <h2 className='text-white text-2xl sm:text-3xl md:text-4xl font-bold'>
            Still Got Questions?
          </h2>
          <p className='text-gray-400 mt-2 text-sm sm:text-base max-w-[600px]'>
            I&apos;ve listed answers to questions I often get as a frontend
            developer.
          </p>
        </div>

        {/* Tombol Prev/Next (desktop) */}
        <div className='hidden md:flex gap-3 mb-8'>
          <button
            onClick={handlePrev}
            className='px-4 py-2 text-white border border-white/30 rounded-lg'
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className='px-4 py-2 text-white border border-white/30 rounded-lg'
          >
            Next
          </button>
        </div>

        {/* Desktop Version */}
        <div className='hidden md:flex overflow-hidden'>
          <div
            className='flex gap-6 transition-transform duration-500'
            style={{
              transform: `translateX(-${activeIndex * 270}px)`,
            }}
          >
            {faqData.map((faq, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={faq.id}
                  onClick={() => setActiveIndex(idx)} // 👈 klik card ganti aktif
                  className={`cursor-pointer transition-all duration-500 flex-shrink-0 
                    ${
                      isActive
                        ? 'w-[379px] h-[466px] bg-[#075864]'
                        : 'w-[252px] h-[466px] border border-white/30'
                    } 
                    relative rounded-lg p-6 text-white`}
                >
                  {isActive ? (
                    <>
                      <Image
                        src='/faq.png'
                        alt='faq'
                        width={80}
                        height={80}
                        className='absolute top-4 left-4'
                      />
                      <Image
                        src='/logo-chat.png'
                        alt='chat'
                        width={40}
                        height={40}
                        className='absolute top-4 right-4'
                      />
                    </>
                  ) : (
                    <Image
                      src='/logo-chat.png'
                      alt='chat'
                      width={30}
                      height={30}
                      className='absolute top-4 left-4'
                    />
                  )}
                  <div className='flex flex-col justify-end h-full'>
                    <h3 className='text-lg font-bold mb-2'>{faq.question}</h3>
                    {isActive && (
                      <p className='text-sm text-gray-200'>{faq.answer}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Version */}
        <div className='md:hidden w-full flex flex-col gap-6'>
          {/* Tombol Prev/Next (mobile) */}
          <div className='flex gap-3'>
            <button
              onClick={handlePrev}
              className='px-4 py-2 text-sm text-white border border-white/30 rounded-lg'
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className='px-4 py-2 text-sm text-white border border-white/30 rounded-lg'
            >
              Next
            </button>
          </div>

          {/* Card Mobile */}
          <div className='w-full max-w-[353px] h-[356px] bg-[#075864] rounded-lg p-6 relative text-white'>
            <Image
              src='/faq.png'
              alt='faq'
              width={60}
              height={60}
              className='absolute top-4 left-4'
            />
            <Image
              src='/logo-chat.png'
              alt='chat'
              width={32}
              height={32}
              className='absolute top-4 right-4'
            />
            <div className='flex flex-col justify-end h-full pt-20'>
              <h3 className='text-base sm:text-lg font-bold mb-3 text-left'>
                {faqData[activeIndex].question}
              </h3>
              <p className='text-sm sm:text-base text-gray-200 text-left leading-relaxed pr-2'>
                {faqData[activeIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
