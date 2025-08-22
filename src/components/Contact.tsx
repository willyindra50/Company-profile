// components/Contact.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Popup from './Popup';

export default function Contact() {
  const [popup, setPopup] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy simulasi random success/error
    const isSuccess = Math.random() > 0.5;
    setPopup(isSuccess ? 'success' : 'error');
  };

  return (
    <section
      id='contact'
      className='relative w-full md:w-[1440px] h-auto md:h-[1010px] mx-auto overflow-hidden flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 px-6 md:px-0 py-12
      bg-black md:bg-gradient-to-b md:from-black md:via-black md:to-[#027380]'
    >
      {/* Background */}
      <Image
        src='/BG-contact.svg'
        alt='Background'
        width={1440}
        height={400}
        className='hidden md:block absolute bottom-0 left-0 w-full h-auto pointer-events-none select-none'
      />
      <Image
        src='/BG-contact-mobile.png'
        alt='Background Mobile'
        width={500}
        height={400}
        className='block md:hidden absolute bottom-0 left-0 w-full h-auto pointer-events-none select-none'
      />

      <div className='relative z-10 flex flex-col md:flex-row gap-10 md:gap-20 w-full md:w-[1180px]'>
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className='w-full md:w-[580px] bg-[#0A0A0A] border border-gray-800 p-8 md:p-12 flex flex-col gap-6'
        >
          <h2 className='text-[28px] sm:text-[34px] md:text-[44px] font-bold leading-snug mb-4'>
            <span className='text-white'>Let&apos;s </span>
            <span className='text-[#149BB0]'>Build Something</span>
            <br />
            <span className='text-white'>Great</span>
          </h2>

          <p className='text-[#94A3B8] text-base md:text-lg leading-relaxed mb-6'>
            Got an idea, a project, or just want to connect? I&apos;m always
            open to new conversations.
          </p>

          <input
            type='text'
            placeholder='Enter your name'
            className='w-full h-[56px] bg-transparent border border-gray-700 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#149BB0]'
          />
          <input
            type='email'
            placeholder='Enter your email'
            className='w-full h-[56px] bg-transparent border border-gray-700 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#149BB0]'
          />
          <textarea
            placeholder='Enter your message'
            className='w-full h-[200px] bg-transparent border border-gray-700 p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#149BB0]'
          />

          <button
            type='submit'
            className='mt-4 flex items-center justify-center gap-2 w-full h-[56px] bg-white text-black font-medium hover:bg-gray-200 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 16 16'
              className='w-5 h-5'
            >
              <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4z' />
              <path d='M0 6.383v5.634A2 2 0 0 0 2 14h12a2 2 0 0 0 2-2V6.383l-7.555 4.533a.5.5 0 0 1-.89 0L0 6.383z' />
            </svg>
            Send Message
          </button>
        </form>

        {/* Right: Info */}
        <div className='w-full md:w-[480px] flex flex-col justify-between text-white mt-4 md:mt-16'>
          <div className='flex flex-col gap-8'>
            <div className='pb-6 border-b border-gray-600'>
              <h3 className='text-lg font-semibold mb-2'>Address</h3>
              <p className='text-[#94A3B8]'>Jakarta, Indonesia</p>
            </div>
            <div className='pb-6 border-b border-gray-600'>
              <h3 className='text-lg font-semibold mb-2'>Contact</h3>
              <p className='text-[#94A3B8]'>(+62) 1234567890</p>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-3'>Social Media</h3>
              <div className='flex gap-4'>
                {[
                  {
                    href: 'https://facebook.com',
                    src: '/icon/fb.png',
                    alt: 'Facebook',
                  },
                  {
                    href: 'https://instagram.com',
                    src: '/icon/ig.png',
                    alt: 'Instagram',
                  },
                  {
                    href: 'https://linkedin.com',
                    src: '/icon/linkedin.png',
                    alt: 'LinkedIn',
                  },
                  {
                    href: 'https://tiktok.com',
                    src: '/icon/tiktok.png',
                    alt: 'TikTok',
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:opacity-80 transition'
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={40}
                      height={40}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <h2 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-12'>
            GET IN TOUCH
          </h2>
        </div>
      </div>

      {popup && <Popup type={popup} onClose={() => setPopup(null)} />}
    </section>
  );
}
