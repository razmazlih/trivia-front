'use client';

import { Button } from '@heroui/react';
import { useGame } from '@/contexts/GameContext';
import { useRouter } from 'next/navigation';

const NavigateButtons = () => {
    const { currentQuestionIndex, setCurrentQuestionIndex, questions } =
        useGame();
    const router = useRouter();

    return (
        <div className="flex justify-between mt-2 px-2">
            <Button
                onPress={() => {
                    if (currentQuestionIndex > 0) {
                        setCurrentQuestionIndex(currentQuestionIndex - 1);
                    }
                }}
                color="primary"
                className="text-white"
                radius="lg"
            >
                Previous
            </Button>
            <Button
                onPress={() => {
                    if (currentQuestionIndex < questions.length - 1) {
                        setCurrentQuestionIndex(() => currentQuestionIndex + 1);
                    } else {
                        router.push('/results');
                    }
                }}
                color="primary"
                className="text-white"
                radius="lg"
            >
                Next
            </Button>
        </div>
    );
};

export default NavigateButtons;
