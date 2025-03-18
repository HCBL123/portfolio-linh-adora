'use client';

import { useState, useEffect } from 'react';
import { SmotionDiv, SmotionHeader } from '@/libs/framer-motion';
import { PREVIEW_BUCKET_LIST } from '@/utils/bucketList';
import Link from 'next/link';

const Proficiency = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <section className='scrollbar-hidden flex justify-center items-center bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]'>
      <div className='relative z-20 flex flex-col overflow-hidden items-center border border-gray-100 bg-white gap-8 rounded-2xl shadow-lg
                    -top-20 px-6 py-6
                    xsm:-top-24
                    md:-top-20 md:px-9
                    lg:-top-28 lg:px-16
                    2xl:px-20'>
        {/* header */}
        <div className='mt-3 sm:mt-6 md:mt-9 lg:mt-12'>
          <SmotionHeader
            elementType='h2'
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-extrabold text-[#2d3436] drop-shadow-sm'
          >
            100 Things Before I Die.
          </SmotionHeader>
          <SmotionDiv
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] h-[0.2rem] w-20 sm:w-32 rounded-xl' />
          </SmotionDiv>
        </div>

        {/* bucket list */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {PREVIEW_BUCKET_LIST.map((item, index) => (
            <SmotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(108,92,231,0.1)"
              }}
              transition={{ duration: 0.2 }}
              className='p-6 bg-gradient-to-br from-white to-[#f7f7ff] rounded-xl shadow-sm border border-gray-100 backdrop-blur-sm'
            >
              <p className='text-[#2d3436] text-lg'>
                <span className="font-bold text-xl mr-2 text-[#6c5ce7]">#{index + 1}</span>
                {item}
              </p>
            </SmotionDiv>
          ))}
        </div>

        {/* And more button */}
        <Link href="/bucket-list" className="mb-4">
          <SmotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 25px rgba(108,92,231,0.2)"
            }}
            transition={{ duration: 0.2 }}
            className='px-8 py-4 bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] text-white rounded-xl shadow-md font-semibold text-lg flex items-center gap-2 hover:opacity-90'
          >
            See all 100 things
            <span className="text-2xl">→</span>
          </SmotionDiv>
        </Link>
      </div>
    </section>
  );
};

export default Proficiency;
