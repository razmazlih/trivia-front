"use client"
import { useGame } from '@/contexts/GameContext';
import AnswersSection from './AnswersSection';
import HeaderSection from './HeaderSection';
import { useEffect, useState } from 'react';
import { SelectedAnswer } from '@/lib/types';

const MainResultSection = () => {
    const { getSelectedAnswers, questions } = useGame();
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, SelectedAnswer>>({});
    const [score, setScore] = useState(0);

    useEffect(() => {
        const answers = getSelectedAnswers();
        setSelectedAnswers(answers);

        const correctCount = Object.values(answers).filter(answer => answer.isCorrect).length;
        const totalQuestions = questions.length;
        const calculatedScore = Math.round((correctCount / totalQuestions) * 100);

        setScore(calculatedScore);
    }, []);

    return (
        <>
            <div className="mt-10 sm:mt-16">
            <HeaderSection score={score} />
            </div>
            <div className="w-11/12 md:w-10/12 lg: lg:w-8/12 mt-10">
            <AnswersSection selectedAnswers={selectedAnswers} questions={questions} />
            </div>
        </>
    );
};

export default MainResultSection;
