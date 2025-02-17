'use client';

import { GameContextType, Question } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext<GameContextType | undefined>(undefined);

interface GameProviderProps {
    children: React.ReactNode;
    initialQuestions: Question[];
}

export const GameProvider = ({
    children,
    initialQuestions,
}: GameProviderProps) => {
    const [questions, setQuestions] = useState<Question[]>(initialQuestions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    return (
        <GameContext.Provider
            value={{
                questions,
                currentQuestionIndex,
                setQuestions,
                setCurrentQuestionIndex,
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
