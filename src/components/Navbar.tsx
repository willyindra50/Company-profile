'use client';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false); // close menu kalau mobile
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className='
          hidden md:flex
          fixed top-6 left-1/2 -translate-x-1/2
          w-[528px] h-[48px]
          items-center justify-center gap-6
          rounded-full px-6
          text-white
          backdrop-blur-md
          ring-1 ring-white/10 shadow-lg
          bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.9)_100%)]
          transition-all duration-300
          hover:ring-white/20 hover:shadow-xl
          z-50
        '
      >
        <span
          className='font-bold cursor-pointer'
          onClick={() => handleScroll('hero')}
        >
          Edwin
        </span>
        <span
          className='cursor-pointer hover:text-gray-300'
          onClick={() => handleScroll('about')}
        >
          About
        </span>
        <span
          className='cursor-pointer hover:text-gray-300'
          onClick={() => handleScroll('skill')}
        >
          Skill
        </span>
        <span
          className='cursor-pointer hover:text-gray-300'
          onClick={() => handleScroll('projects')}
        >
          Projects
        </span>
        <span
          className='cursor-pointer hover:text-gray-300'
          onClick={() => handleScroll('faq')}
        >
          FAQ
        </span>
        <span
          className='cursor-pointer hover:text-gray-300'
          onClick={() => handleScroll('contact')}
        >
          Contact
        </span>
      </nav>

      {/* Mobile Navbar (hilang kalau open = true) */}
      {!open && (
        <div
          className='
            md:hidden
            fixed top-4 left-1/2 -translate-x-1/2
            w-[90%] max-w-[350px] h-[48px]
            flex items-center justify-between
            rounded-full px-6
            text-white
            backdrop-blur-md
            ring-1 ring-white/10 shadow-md
            bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.9)_100%)]
            z-50
          '
        >
          <span
            className='font-bold text-lg cursor-pointer'
            onClick={() => handleScroll('hero')}
          >
            Edwin
          </span>
          <button onClick={() => setOpen(true)}>
            <Menu className='w-7 h-7' />
          </button>
        </div>
      )}

      {/* Overlay Menu */}
      {open && (
        <div
          className='
            fixed inset-0 z-50
            bg-black/70 backdrop-blur-lg
            text-white flex flex-col px-6 py-6 animate-fadeIn
          '
        >
          {/* Header */}
          <div className='flex items-center justify-between mb-10'>
            <span
              className='font-bold text-lg cursor-pointer'
              onClick={() => handleScroll('hero')}
            >
              Edwin
            </span>
            <button onClick={() => setOpen(false)}>
              <X className='w-7 h-7' />
            </button>
          </div>

          {/* Menu Items */}
          <div className='flex flex-col gap-6 text-lg'>
            <button onClick={() => handleScroll('about')}>About</button>
            <button onClick={() => handleScroll('skill')}>Skill</button>
            <button onClick={() => handleScroll('projects')}>Projects</button>
            <button onClick={() => handleScroll('faq')}>FAQ</button>
            <button onClick={() => handleScroll('contact')}>Contact</button>
          </div>
        </div>
      )}
    </>
  );
}
