import About from '@/components/About';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import HeroSection from '@/components/HeroSection';
import Journey from '@/components/Journey';
import Marquee from '@/components/Marquee';
import Projects from '@/components/Projects';
import Skill from '@/components/Skill';
import Tools from '@/components/Tools';
import Trusted from '@/components/Trusted';

export default function Home() {
  return (
    <>
      <section id='hero'>
        <HeroSection />
      </section>

      <div className='w-full h-[146px] bg-black'></div>

      <Marquee />

      <section id='about'>
        <About />
      </section>

      <Tools />

      <section id='skill'>
        <Skill />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <Journey />
      <Trusted />

      <section id='faq'>
        <Faq />
      </section>

      <section id='contact'>
        <Contact />
      </section>
    </>
  );
}
