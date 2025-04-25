import { useState, useEffect } from 'react';

const STORAGE_KEY = 'bucket-list-progress';

export function useBucketList(totalItems: number) {
  // Initialize with an array of false values
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(totalItems).fill(false));

  // Load saved progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        if (Array.isArray(parsed) && parsed.length === totalItems) {
          setCheckedItems(parsed);
        }
      } catch {
        // If there's an error parsing, keep the initial state
        console.warn('Failed to parse saved progress from localStorage');
      }
    }
  }, [totalItems]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (index: number) => {
    setCheckedItems(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const progress = {
    completed: checkedItems.filter(Boolean).length,
    total: totalItems,
    percentage: Math.round((checkedItems.filter(Boolean).length / totalItems) * 100)
  };

  return {
    checkedItems,
    toggleItem,
    progress
  };
} 