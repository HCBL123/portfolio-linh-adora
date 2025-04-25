'use client';

import { FULL_BUCKET_LIST } from '@/utils/bucketList';
import { SmotionDiv } from '@/libs/framer-motion';
import Link from 'next/link';
import BucketListItem from '@/components/bucket-list/BucketListItem';
import { useBucketList } from '@/hooks/useBucketList';

export default function BucketList() {
  const { checkedItems, toggleItem, progress } = useBucketList(FULL_BUCKET_LIST.length);

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
          <p className='text-xl text-[#2d3436]/70 mb-6'>
            A collection of dreams, goals, and adventures to pursue in this lifetime.
          </p>
          
          <div className='bg-white rounded-xl p-6 shadow-sm border border-[#a29bfe]/20'>
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-2xl font-semibold text-[#2d3436]'>Your Progress</h2>
              <span className='text-lg font-medium text-[#6c5ce7]'>
                {progress.completed} / {progress.total} completed
              </span>
            </div>
            <div className='w-full bg-[#e9ecef] rounded-full h-4'>
              <div 
                className='bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] h-4 rounded-full transition-all duration-300'
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        </SmotionDiv>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {FULL_BUCKET_LIST.map((item, index) => (
            <BucketListItem
              key={index}
              index={index}
              item={item}
              isChecked={checkedItems[index]}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
