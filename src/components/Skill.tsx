// components/Skill.tsx
'use client';

import Image from 'next/image';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  'React Expert',
  'Pixel Perfect',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Performance Optimization',
  'Responsive Website',
  'UI Design Proficiency (Figma)',
];

export default function Skill() {
  return (
    <section className='relative w-full md:w-[1440px] h-auto md:h-[938px] bg-black overflow-hidden mx-auto flex items-center justify-center px-5 sm:px-8'>
      {/* Background full section pojok kiri bawah */}
      <Image
        src='/BG-Skill.png'
        alt='Background Skill'
        fill
        className='absolute bottom-0 left-0 object-cover object-left-bottom'
        priority
      />

      <div className='relative flex flex-col items-center text-center w-full'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-white font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight mb-3'
        >
          Not Your Typical Frontend Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-[#94A3B8] text-sm sm:text-base md:text-lg mb-10'
        >
          I care about how it looks, how it works, and how it feels — all at
          once
        </motion.p>

        {/* Skill Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='w-full max-w-[1200px] bg-black border border-[#1E293B] rounded-lg overflow-hidden'
        >
          <table className='w-full text-left text-white'>
            <thead>
              <tr className='border-b border-[#1E293B]'>
                <th className='py-4 px-6 text-lg font-semibold w-1/3'>Skill</th>
                <th className='py-4 px-6 text-lg font-semibold w-1/3 bg-[#0D4F56]'>
                  With Me
                </th>
                <th className='py-4 px-6 text-lg font-semibold w-1/3'>Other</th>
              </tr>
            </thead>
            <motion.tbody
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {skills.map((skill, idx) => (
                <motion.tr
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className='border-b border-[#1E293B] last:border-0'
                >
                  <td className='py-4 px-6 text-sm sm:text-base'>{skill}</td>
                  <td className='py-4 px-6 bg-[#0D4F56]'>
                    <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center'>
                      <Check className='w-4 h-4 text-black' strokeWidth={3} />
                    </div>
                  </td>
                  <td className='py-4 px-6'>
                    <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center'>
                      <X className='w-4 h-4 text-gray-400' strokeWidth={3} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
