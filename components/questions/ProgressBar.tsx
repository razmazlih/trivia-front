'use client';
import { Progress } from '@heroui/react';
import React from 'react';

const ProgressBar = () => {
    return (
        <div className='flex flex-wrap justify-between'>
          <div className='text-sm'>
            Time left: <span className='text-primary font-semibold'>30s</span>
          </div>
          <div className='text-sm'>
            Question 3 of 10
          </div>
            <Progress aria-label="Loading..." className="w-full mt-2" value={30} />
        </div>
    );
};

export default ProgressBar;
