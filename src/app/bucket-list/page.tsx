'use client';

import { FULL_BUCKET_LIST } from '@/utils/bucketList';
import { SmotionDiv } from '@/libs/framer-motion';
import Link from 'next/link';

export default function BucketList() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-[#EAFDF9] to-white py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-8'>
          <Link 
            href="/" 
            className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-lg'
          >
            <span className="text-2xl">←</span> Back to home
          </Link>
        </div>
        
        <SmotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-12'
        >
          <h1 className='text-5xl font-bold text-primary mb-4'>
            100 Things Before I Die
          </h1>
          <p className='text-xl text-primary/70'>
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
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className='p-6 bg-white rounded-xl shadow-md border border-[#E0F5F1] backdrop-blur-sm
                        hover:bg-[#F5FFFD] transition-colors duration-300'
            >
              <div className='flex items-start gap-4'>
                <span className="font-bold text-3xl text-primary/20">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <p className='text-primary text-lg leading-relaxed'>
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
