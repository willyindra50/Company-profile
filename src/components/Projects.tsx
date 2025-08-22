// components/Projects.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Portofolio 1', year: '2025', image: '/porto-1.png' },
  { id: 2, title: 'Portofolio 2', year: '2025', image: '/porto-2.png' },
  { id: 3, title: 'Portofolio 3', year: '2025', image: '/porto-3.png' },
];

export default function Projects() {
  return (
    <section className='relative w-full md:w-[1440px] h-auto md:h-[771px] bg-black overflow-hidden mx-auto flex flex-col items-center px-5 sm:px-8 py-12 sm:py-16'>
      {/* Heading */}
      <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight mb-3 text-center'>
        Bridging Design and Development
      </h2>
      <p className='text-[#94A3B8] text-xs sm:text-sm md:text-base mb-12 text-center max-w-[700px]'>
        These are real projects where I implemented frontend interfaces with
        precision and attention to detail.
      </p>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 w-full max-w-[1200px]'>
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className='flex flex-col items-center'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Gambar Portofolio */}
            <div className='w-[361px] sm:w-[300px] md:w-[373px] h-[361px] sm:h-[300px] md:h-[373px] overflow-hidden rounded-lg shadow-lg'>
              <Image
                src={project.image}
                alt={project.title}
                width={373}
                height={373}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Nama & Tahun */}
            <div className='w-[260px] sm:w-[300px] md:w-[373px] mt-4 text-left'>
              <h3 className='text-white font-semibold text-lg sm:text-xl'>
                {project.title}
              </h3>
              <p className='text-[#94A3B8] text-sm sm:text-base'>
                {project.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
