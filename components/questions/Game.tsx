'use client';

import NavigateButtons from '@/components/questions/NavigateButtons';
import ProgressBar from '@/components/questions/ProgressBar';
import QuestionCard from '@/components/questions/QuestionCard';
import { useGame } from '@/contexts/GameContext';

const Game = () => {
    const { questions, currentQuestionIndex } = useGame();

    if (questions.length === 0) {
        return (
            <div>
                <div>Loading...</div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="flex flex-col justify-center items-center w-full sm:w-10/12 lg:w-8/12">
            <div className="w-10/12 mt-10 sm:mt-24">
                <ProgressBar />
            </div>
            <div className="w-10/12 mt-8">
                <QuestionCard question={currentQuestion} />
            </div>
            <div className="w-10/12">
                <NavigateButtons />
            </div>
        </div>
    );
};

export default Game;
