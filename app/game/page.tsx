import MainNavbar from '@/components/landing/MainNavbar';
import NavigateButtons from '@/components/questions/NavigateButtons';
import ProgressBar from '@/components/questions/ProgressBar';
import QuestionCard from '@/components/questions/QuestionCard';
import React from 'react';

const GamePage = () => {
    return (
        <div className='flex flex-col items-center'>
            <MainNavbar />
            <div className='flex flex-col justify-center items-center w-full sm:w-10/12 lg:w-8/12'>
                <div className="w-10/12 mt-10 sm:mt-24">
                    <ProgressBar />
                </div>
                <div className='w-10/12 mt-8'><QuestionCard /></div>
                <div className='w-10/12'><NavigateButtons /></div>
            </div>
        </div>
    );
};

export default GamePage;
