'use client';

import { FULL_BUCKET_LIST } from '@/utils/bucketList';
import { SmotionDiv } from '@/libs/framer-motion';
import Link from 'next/link';

export default function BucketList() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-8'>
          <Link 
            href="/" 
            className='inline-flex items-center gap-2 text-[#6c5ce7] hover:gap-3 transition-all duration-300 text-lg font-medium'
          >
            <span className="text-2xl">←</span> Back to home
          </Link>
        </div>
        
        <SmotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-12'
        >
          <h1 className='text-5xl font-bold bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent mb-4'>
            100 Things Before I Die
          </h1>
          <p className='text-xl text-[#2d3436]/70'>
            A collection of dreams, goals, and adventures to pursue in this lifetime.
          </p>
        </SmotionDiv>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FULL_BUCKET_LIST.map((item, index) => (
            <SmotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 25px rgba(108,92,231,0.2)"
              }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className='p-6 bg-gradient-to-br from-white to-[#f7f7ff] rounded-xl shadow-sm border border-[#a29bfe]/20 backdrop-blur-sm
                        hover:border-[#6c5ce7]/30 transition-all duration-300'
            >
              <div className='flex items-start gap-4'>
                <span className="font-bold text-3xl bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <p className='text-[#2d3436] text-lg leading-relaxed'>
                  {item}
                </p>
              </div>
            </SmotionDiv>
          ))}
        </div>
      </div>
    </main>
  );
}
