'use client';
import Image from 'next/image';
import React from 'react';
import { motion, useMotionValue, animate, useScroll } from 'framer-motion';

type Skill = {
  id: string;
  icon: string;
  name: string;
  percent: string;
};

const SKILLS: Skill[] = [
  { id: 'html', icon: '/icon/html.png', name: 'HTML', percent: '100%' },
  { id: 'css', icon: '/icon/css.png', name: 'CSS', percent: '90%' },
  { id: 'js', icon: '/icon/js.png', name: 'Javascript', percent: '90%' },
  { id: 'ts', icon: '/icon/ts.png', name: 'Typescript', percent: '80%' },
  {
    id: 'sequelize',
    icon: '/icon/sequelize.png',
    name: 'Sequalize',
    percent: '80%',
  },
  { id: 'mongo', icon: '/icon/mongo.png', name: 'Mongo DB', percent: '75%' },
  { id: 'react', icon: '/icon/react.svg', name: 'React', percent: '90%' },
  {
    id: 'react-native',
    icon: '/icon/react-native.svg',
    name: 'React Native',
    percent: '80%',
  },
  {
    id: 'PostgreSQL',
    icon: '/icon/PostgreSQL.svg',
    name: 'PostgreSQL',
    percent: '75%',
  },
  { id: 'docker', icon: '/icon/docker.svg', name: 'Docker', percent: '80%' },
];

// 🔥 Komponen kecil buat animasi angka
function AnimatedPercent({ target }: { target: string }) {
  const [value, setValue] = React.useState(0);
  const numericTarget = parseInt(target.replace('%', ''), 10);
  const val = useMotionValue(0);

  React.useEffect(() => {
    const controls = animate(val, numericTarget, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return controls.stop;
  }, [val, numericTarget]);

  return (
    <motion.span className='text-base sm:text-lg md:text-[20px] font-bold'>
      {value}%
    </motion.span>
  );
}

export default function Tools() {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // scroll ke Contact.tsx (pastikan section contact punya id="contact")
  const handleSendMessage = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      aria-labelledby='tools-title'
      className='relative w-full md:w-[1440px] h-auto md:h-[689px] bg-black mx-auto text-white flex items-center py-12 md:py-0'
    >
      <div className='w-full max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-12 md:gap-0'>
          {/* LEFT (digeser kiri dikit biar sejajar) */}
          <div className='w-full md:w-[367px] flex flex-col justify-between h-auto md:h-[529px] -ml-1 sm:-ml-2 md:-ml-3'>
            <div>
              <h2
                id='tools-title'
                className='text-3xl sm:text-4xl md:text-[40px] leading-tight md:leading-[48px] font-bold tracking-[-0.5px]'
              >
                Tools I Use to <br className='hidden md:block' /> Build
              </h2>
              <p className='mt-4 text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[28px] text-[#94A3B8]'>
                From code to design — here’s the tech that helps me turn ideas
                into real products.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleSendMessage}
              type='button'
              className='mt-8 md:mt-0 flex items-center justify-center gap-3 w-full md:w-[367px] h-[48px] md:h-[56px] bg-[#149BB0] rounded-md hover:bg-[#0f7e8a] transition-colors shadow-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M2 6.5C2 5.67157 2.67157 5 3.5 5H20.5C21.3284 5 22 5.67157 22 6.5V17.5C22 18.3284 21.3284 19 20.5 19H3.5C2.67157 19 2 18.3284 2 17.5V6.5Z'
                  stroke='white'
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22 6L12 13L2 6'
                  stroke='white'
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='text-white text-sm md:text-[16px] font-medium'>
                Send Message
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className='relative w-full md:w-[642px] flex flex-col justify-center'>
            {/* Progress Bar (desktop) */}
            <div className='hidden md:block absolute top-0 left-[-32px] w-[2px] h-full bg-[#1e293b]'>
              <motion.div
                className='w-full h-full bg-white origin-top'
                style={{ scaleY: scrollYProgress }}
              />
            </div>

            {/* Scrollable List */}
            <div
              ref={scrollRef}
              className='max-h-[360px] md:max-h-[529px] overflow-y-auto pr-2 no-scrollbar'
            >
              {SKILLS.map((s, idx) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between py-4 ${
                    idx === 0 ? '' : 'border-t border-[#1e293b]'
                  }`}
                >
                  <div className='flex items-center gap-4 sm:gap-6'>
                    <div className='flex-shrink-0 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>
                      <Image
                        src={s.icon}
                        alt={s.name}
                        width={60}
                        height={60}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <div className='text-base sm:text-lg md:text-[20px] font-semibold leading-tight'>
                      {s.name}
                    </div>
                  </div>
                  <AnimatedPercent target={s.percent} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ⛔️ CSS buat hilangin scrollbar default */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
