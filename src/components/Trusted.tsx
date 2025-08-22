// components/Trusted.tsx
import Image from 'next/image';

export default function Trusted() {
  return (
    <section className='relative w-full md:w-[1440px] h-auto md:h-[1065px] text-white mx-auto px-5 sm:px-8 md:px-0 py-16'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h2 className='text-3xl sm:text-4xl md:text-[40px] font-bold mb-4'>
          Trusted Voices
        </h2>
        <p className='text-gray-400 text-sm sm:text-base max-w-[620px] mx-auto'>
          Here’s what people say about working with me — across projects, teams,
          and timelines.
        </p>
      </div>

      {/* Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-[448px_732px] gap-8 justify-center'>
        {/* 8X Box */}
        <div
          className='relative w-full md:w-[448px] h-auto md:h-[751px] p-8 flex flex-col justify-between border border-gray-700'
          style={{
            backgroundImage: "url('/BG-8x.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'top left',
          }}
        >
          <div>
            <h3 className='text-[32px] font-bold'>8X</h3>
            <p className='text-xl font-semibold mb-4'>
              More users converted after redesign
            </p>
            <div className='flex text-yellow-400 mb-4'>
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className='text-sm leading-relaxed'>
              Working with Edwin has been a fantastic experience. His attention
              to detail and commitment to quality are evident in every project.
              He consistently delivers results that exceed expectations, making
              him a valuable asset to any team.
            </p>
          </div>
          <div className='flex flex-col items-start gap-2 mt-6 relative'>
            <Image
              src='/profile1.png'
              alt='Pablo Stanley'
              width={40}
              height={40}
              className='rounded-full'
            />
            <div>
              <p className='font-semibold'>Pablo Stanley</p>
              <p className='text-sm text-gray-300'>
                Product Manager at Finovate
              </p>
            </div>
            {/* Quote Icon */}
            <Image
              src='/petik-2.png'
              alt='Quote'
              width={48}
              height={48}
              className='absolute bottom-0 right-0'
            />
          </div>
        </div>

        {/* Right Column */}
        <div className='flex flex-col gap-5'>
          {/* 3X Box */}
          <div className='relative w-full md:w-[732px] h-auto md:h-[367px] p-8 flex flex-col justify-between border border-gray-700'>
            <div>
              <h3 className='text-[28px] font-bold'>3X</h3>
              <p className='text-lg font-semibold mb-4'>
                Improved user engagement and sign-ups
              </p>
              <div className='flex text-yellow-400 mb-4'>
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className='text-gray-200 text-sm leading-relaxed'>
                Edwin’s expertise in frontend development is remarkable. He
                brings creativity and innovation to the table, ensuring that
                every project is not only functional but also visually
                appealing.
              </p>
            </div>
            <div className='flex flex-col items-start gap-2 mt-6 relative'>
              <Image
                src='/profile2.png'
                alt='Pablo Stanley'
                width={40}
                height={40}
                className='rounded-full'
              />
              <div>
                <p className='font-semibold'>Pablo Stanley</p>
                <p className='text-sm text-gray-400'>
                  Product Manager at Finovate
                </p>
              </div>
              {/* Quote Icon */}
              <Image
                src='/petik-2.png'
                alt='Quote'
                width={48}
                height={48}
                className='absolute bottom-0 right-0'
              />
            </div>
          </div>

          {/* Bottom Two Boxes */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='relative w-full md:w-[356px] h-auto md:h-[364px] p-6 flex flex-col justify-between border border-gray-700'>
              <div>
                <div className='flex text-yellow-400 mb-4'>
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className='text-gray-200 text-sm leading-relaxed'>
                  Edwin’s work ethic and dedication are truly inspiring. He
                  approaches challenges with a positive attitude and
                  consistently finds effective solutions.
                </p>
              </div>
              <div className='flex flex-col items-start gap-2 mt-6 relative'>
                <Image
                  src='/profile3.png'
                  alt='Pablo Stanley'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div>
                  <p className='font-semibold'>Pablo Stanley</p>
                  <p className='text-sm text-gray-400'>
                    Product Manager at Finovate
                  </p>
                </div>
                {/* Quote Icon */}
                <Image
                  src='/petik-2.png'
                  alt='Quote'
                  width={48}
                  height={48}
                  className='absolute bottom-0 right-0'
                />
              </div>
            </div>

            <div className='relative w-full md:w-[356px] h-auto md:h-[364px] p-6 flex flex-col justify-between border border-gray-700 justify-self-end'>
              <div>
                <div className='flex text-yellow-400 mb-4'>
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className='text-gray-200 text-sm leading-relaxed'>
                  Edwin has a unique ability to transform complex ideas into
                  user-friendly designs. His contributions have significantly
                  enhanced our projects.
                </p>
              </div>
              <div className='flex flex-col items-start gap-2 mt-6 relative'>
                <Image
                  src='/profile4.png'
                  alt='Pablo Stanley'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div>
                  <p className='font-semibold'>Pablo Stanley</p>
                  <p className='text-sm text-gray-400'>
                    Product Manager at Finovate
                  </p>
                </div>
                {/* Quote Icon */}
                <Image
                  src='/petik-2.png'
                  alt='Quote'
                  width={48}
                  height={48}
                  className='absolute bottom-0 right-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
