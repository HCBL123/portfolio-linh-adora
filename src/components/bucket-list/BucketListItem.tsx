import { SmotionDiv } from '@/libs/framer-motion';
import { useState, useEffect } from 'react';

interface BucketListItemProps {
  index: number;
  item: string;
  isChecked: boolean;
  onToggle: (index: number) => void;
}

export default function BucketListItem({ index, item, isChecked, onToggle }: BucketListItemProps) {
  return (
    <SmotionDiv
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
        <div className='flex items-center gap-3'>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => onToggle(index)}
            className='w-5 h-5 rounded border-2 border-[#6c5ce7] text-[#6c5ce7] focus:ring-[#6c5ce7] cursor-pointer'
          />
          <span className="font-bold text-3xl bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] bg-clip-text text-transparent">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>
        <p className={`text-[#2d3436] text-lg leading-relaxed ${isChecked ? 'line-through text-[#2d3436]/50' : ''}`}>
          {item}
        </p>
      </div>
    </SmotionDiv>
  );
} 