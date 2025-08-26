// components/HeroSection.tsx
'use client';
import Image from 'next/image';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className='relative w-full md:w-[1440px] h-auto md:h-[756px] bg-black overflow-hidden mx-auto'>
      {/* Navbar */}
      <Navbar />

      {/* Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='absolute top-0 left-0 w-full h-full'
      >
        <Image
          src='/BG-Hero.png'
          alt='Background Hero'
          width={1440}
          height={756}
          className='w-full h-full object-cover'
          priority
        />
      </motion.div>

      {/* Layout wrapper */}
      <div className='relative flex flex-col items-center md:block px-5 sm:px-8 md:px-0 mt-0 md:mt-0'>
        {/* Hero Card tampil di mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Image
            src='/hero-card.png'
            alt='Hero Card'
            width={341}
            height={671}
            className='block md:hidden w-[260px] sm:w-[300px] h-auto mb-6 mt-0'
            priority
          />
        </motion.div>

        {/* Konten teks */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className='text-center md:text-left md:absolute top-[227px] left-[140px] max-w-[684px]'
        >
          <p className='text-white text-base sm:text-lg md:text-[18px] font-normal leading-relaxed mb-3 sm:mb-4 tracking-[0.5px]'>
            Hi, I&apos;m Edwin Anderson
          </p>

          <h1 className='text-white font-bold text-4xl sm:text-5xl md:text-[96px] leading-tight md:leading-[105px] tracking-[-1px]'>
            FRONT{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className='inline-block'
            >
              <Image
                src='/END.png'
                alt='END'
                width={100}
                height={60}
                className='align-baseline w-[80px] h-[40px] sm:w-[100px] sm:h-[60px] md:w-[150px] md:h-[80px]'
              />
            </motion.span>
            <br />
            DEVELOPER
          </h1>

          <p className='text-[#94A3B8] text-sm sm:text-base md:text-[16.5px] leading-relaxed md:leading-[28px] font-normal max-w-[684px] mt-5 sm:mt-6'>
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
            onClick={() => {
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className='mt-8 flex items-center justify-center gap-2 w-[180px] sm:w-[220px] md:w-[287px] h-[44px] sm:h-[48px] md:h-[56px] bg-[#149BB0] text-white text-sm sm:text-base md:text-[16px] font-medium rounded-lg hover:bg-[#067c94] transition-colors mx-auto md:mx-0'
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
            Hire Me
          </motion.button>
        </motion.div>

        {/* Hero Card hanya desktop */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          <Image
            src='/hero-card.png'
            alt='Hero Card'
            width={341}
            height={671}
            className='hidden md:block absolute top-0 right-[131px]'
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
