import Image from 'next/image';

export default function About() {
  return (
    <section className='relative w-full md:w-[1440px] bg-black mx-auto text-white px-5 sm:px-8 md:px-[140px] py-[80px]'>
      {/* Top Content */}
      <div className='flex flex-col md:flex-row justify-between items-start pt-[60px] md:pt-[80px] gap-8'>
        {/* Left Title */}
        <div className='max-w-full md:max-w-[880px]'>
          <h2 className='text-2xl sm:text-3xl md:text-[38px] font-bold leading-snug md:leading-[50px] tracking-[-0.5px]'>
            I turn ideas and designs into functional, accessible, and performant
            websites
            <br />
            <span className='text-[#00A8C5]'>
              using modern frontend technologies.
            </span>
          </h2>
        </div>

        {/* Right Top Links */}
        <div className='flex flex-col md:items-end gap-4 md:gap-6'>
          <a
            href='#'
            className='text-white text-sm sm:text-base md:text-[16px] font-normal hover:text-[#00A8C5] transition'
          >
            About Me
          </a>

          {/* Social Icons */}
          <div className='flex gap-3 sm:gap-4'>
            <Image
              src='/icon/fb.png'
              alt='Facebook'
              width={32}
              height={32}
              className='sm:w-8 sm:h-8'
            />
            <Image
              src='/icon/ig.png'
              alt='Instagram'
              width={32}
              height={32}
              className='sm:w-8 sm:h-8'
            />
            <Image
              src='/icon/linkedin.png'
              alt='LinkedIn'
              width={32}
              height={32}
              className='sm:w-8 sm:h-8'
            />
            <Image
              src='/icon/tiktok.png'
              alt='TikTok'
              width={32}
              height={32}
              className='sm:w-8 sm:h-8'
            />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className='w-full h-[1px] bg-[#1E293B] mt-8 md:mt-10' />

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row gap-10 md:gap-[60px] mt-10 md:mt-[60px]'>
        {/* Left Person Image */}
        <div className='flex justify-center md:block'>
          <Image
            src='/person-laptop.png'
            alt='Person with Laptop'
            width={453}
            height={513}
            className='rounded-md w-[361px] sm:w-[360px] md:w-[453px] h-auto'
            priority
          />
        </div>

        {/* Right Features */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-8 md:gap-x-[80px] w-full md:w-[706px]'>
          {/* Item 1 */}
          <div className='flex flex-col items-start gap-3 sm:gap-4'>
            <Image
              src='/icon/frontend.png'
              alt='Frontend Development'
              width={40}
              height={40}
              className='w-7 h-7 sm:w-8 sm:h-8'
            />
            <h3 className='font-semibold text-lg sm:text-[18px] leading-[28px]'>
              Frontend Development
            </h3>
            <p className='text-[#94A3B8] text-sm sm:text-[15px] leading-relaxed'>
              I build responsive, accessible, and scalable websites using modern
              frontend tools and best practices.
            </p>
          </div>

          {/* Item 2 */}
          <div className='flex flex-col items-start gap-3 sm:gap-4'>
            <Image
              src='/icon/web-performance.png'
              alt='Web Performance'
              width={40}
              height={40}
              className='w-7 h-7 sm:w-8 sm:h-8'
            />
            <h3 className='font-semibold text-lg sm:text-[18px] leading-[28px]'>
              Web Performance
            </h3>
            <p className='text-[#94A3B8] text-sm sm:text-[15px] leading-relaxed'>
              I optimize websites for speed and efficiency to ensure smooth
              experiences across all devices.
            </p>
          </div>

          {/* Item 3 */}
          <div className='flex flex-col items-start gap-3 sm:gap-4'>
            <Image
              src='/icon/component.png'
              alt='Component Based UI'
              width={40}
              height={40}
              className='w-7 h-7 sm:w-8 sm:h-8'
            />
            <h3 className='font-semibold text-lg sm:text-[18px] leading-[28px]'>
              Component Based UI
            </h3>
            <p className='text-[#94A3B8] text-sm sm:text-[15px] leading-relaxed'>
              I specialize in crafting reusable UI components that are clean,
              maintainable, and aligned with design systems.
            </p>
          </div>

          {/* Item 4 */}
          <div className='flex flex-col items-start gap-3 sm:gap-4'>
            <Image
              src='/icon/responsive.png'
              alt='Responsive Design'
              width={40}
              height={40}
              className='w-7 h-7 sm:w-8 sm:h-8'
            />
            <h3 className='font-semibold text-lg sm:text-[18px] leading-[28px]'>
              Responsive Design
            </h3>
            <p className='text-[#94A3B8] text-sm sm:text-[15px] leading-relaxed'>
              I ensure that every layout adapts beautifully to different screen
              sizes — from mobile to desktop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
