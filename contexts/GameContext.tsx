'use client';

import { fetchQuestions } from '@/lib/fetchQuestions';
import { GameContextType, Question, SelectedAnswer } from '@/lib/types';
import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext<GameContextType | undefined>(undefined);

interface GameProviderProps {
    children: React.ReactNode;
    initialQuestions?: Question[];
}

export const GameProvider = ({
    children,
    initialQuestions = [],
}: GameProviderProps) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, SelectedAnswer>>({});
    
    useEffect(() => {
        async function loadQuestions() {
            const stored = sessionStorage.getItem('questions');
            const storedTimestamp =
                sessionStorage.getItem('questionsTimestamp');

            const now = Date.now();
            const isExpired = storedTimestamp
                ? now - parseInt(storedTimestamp, 10) > 300000
                : true;

            if (stored && !isExpired) {
                setQuestions(JSON.parse(stored));
            } else {
                const qs =
                    initialQuestions.length > 0
                        ? initialQuestions
                        : await fetchQuestions();
                setQuestions(qs);
                sessionStorage.setItem('questions', JSON.stringify(qs));
                sessionStorage.setItem('questionsTimestamp', now.toString());
            }
        }

        loadQuestions();
    }, []);

    const selectAnswer = (answerId: string) => {
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = currentQuestion?.options.find(option => option.id === answerId)?.correct || false;
    
        const updatedAnswers = {
            ...selectedAnswers,
            [currentQuestionIndex]: {
                questionId: currentQuestion?.id,
                answerId,
                isCorrect,
            },
        };
    
        setSelectedAnswers(updatedAnswers);
    
        sessionStorage.setItem('selectedAnswers', JSON.stringify(updatedAnswers));
        localStorage.setItem('selectedAnswers', JSON.stringify(updatedAnswers));
    };

    const clearSelectedAnswers = () => {
        sessionStorage.removeItem('selectedAnswers');
        localStorage.removeItem('selectedAnswers')
        setSelectedAnswers({});
    };
    
    const getSelectedAnswers = () => {
        const storedAnswers = sessionStorage.getItem('selectedAnswers') || localStorage.getItem('selectedAnswers');
        return storedAnswers ? JSON.parse(storedAnswers) : {};
    };

    return (
        <GameContext.Provider
            value={{
                questions,
                currentQuestionIndex,
                setQuestions,
                setCurrentQuestionIndex,
                selectedAnswers,
                selectAnswer,
                clearSelectedAnswers,
                getSelectedAnswers,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};
