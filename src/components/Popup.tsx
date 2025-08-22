// components/Popup.tsx
'use client';
import Image from 'next/image';

type PopupProps = {
  type: 'success' | 'error';
  onClose: () => void;
};

export default function Popup({ type, onClose }: PopupProps) {
  const imageSrc =
    type === 'success' ? '/popup-success.png' : '/popup-error.png';

  return (
    <div className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='relative bg-[#0A0A0A] w-[400px] rounded-xl overflow-hidden text-center shadow-lg'>
        {/* Background Image */}
        <div className='relative w-full h-[220px]'>
          <Image src={imageSrc} alt={type} fill className='object-cover' />
          {/* Gradient hitam tipis */}
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/90' />
        </div>

        {/* Content */}
        <div className='relative z-10 p-6 text-white'>
          {type === 'success' ? (
            <>
              <h2 className='text-2xl font-bold'>Thanks for Reaching Out!</h2>
              <p className='text-gray-300 mt-2'>
                I’ve received your message and will get back to you shortly.
              </p>
              <button
                onClick={onClose}
                className='mt-6 w-full py-3 bg-[#149BB0] text-white rounded-lg hover:bg-[#067c94]'
              >
                Back to Home
              </button>
            </>
          ) : (
            <>
              <h2 className='text-2xl font-bold'>Message Not Sent</h2>
              <p className='text-gray-300 mt-2'>
                Something broke along the way. Let&apos;s try resending it.
              </p>
              <button
                onClick={onClose}
                className='mt-6 w-full py-3 bg-[#149BB0] text-white rounded-lg hover:bg-[#067c94]'
              >
                Try Again
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
