'use client';

import { fetchQuestions } from '@/lib/fetchQuestions';
import { GameContextType, Question } from '@/lib/types';
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
    const [selectedAnswers, setSelectedAnswers] = useState<
        Record<number, { questionId: number; answerId: string } | null>
    >({});

    useEffect(() => {
        async function loadQuestions() {
            const stored = sessionStorage.getItem('questions');
            if (stored) {
                setQuestions(JSON.parse(stored));
            } else {
                const qs =
                    initialQuestions.length > 0
                        ? initialQuestions
                        : await fetchQuestions();
                setQuestions(qs);
                sessionStorage.setItem('questions', JSON.stringify(qs));
            }
        }
        loadQuestions();
    }, []);

    const selectAnswer = (answerId: string) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [currentQuestionIndex]: {
                questionId: questions[currentQuestionIndex]?.id,
                answerId,
            },
        }));
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
