'use client';

import { useGame } from '@/contexts/GameContext';
import { Progress } from '@heroui/react';

const ProgressBar = () => {
    const { currentQuestionIndex, questions } = useGame();
    return (
        <div className="flex flex-wrap justify-between">
            <div className="text-sm">
                Time left:{' '}
                <span className="text-primary font-semibold">30s</span>
            </div>
            <div className="text-sm">
                Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <Progress
                aria-label="Loading..."
                className="w-full mt-2"
                value={
                    (currentQuestionIndex * 100) / questions.length +
                    100 / questions.length
                }
            />
        </div>
    );
};

export default ProgressBar;
