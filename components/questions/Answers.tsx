'use client';

import { useGame } from '@/contexts/GameContext';
import { AnswersProps } from '@/lib/types';

const Answers: React.FC<AnswersProps> = ({ answers }) => {
    const { selectedAnswers, selectAnswer, currentQuestionIndex } = useGame();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-5">
            {answers.map((answer) => (
                <p
                    key={answer.id}
                    onClick={() => selectAnswer(answer.id)}
                    className={`border-2 rounded-lg px-4 py-2 text-center cursor-pointer ${
                        selectedAnswers[currentQuestionIndex]?.answerId ===
                        answer.id
                            ? 'text-orange-600 border-orange-600 bg-orange-100 transition-all'
                            : 'border-gray-200'
                    }`}
                >
                    {answer.text}
                </p>
            ))}
        </div>
    );
};

export default Answers;
