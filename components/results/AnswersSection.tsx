'use client';

import { SelectedAnswer, Question } from '@/lib/types';

const AnswersSection = ({
    selectedAnswers,
    questions,
}: {
    selectedAnswers: Record<number, SelectedAnswer>;
    questions: Question[];
}) => {
    return (
        <div>
            <h2 className="text-xl font-bold">Correct Answers</h2>
            <div className="flex w-full gap-2 flex-wrap mt-2">
                {questions.map((question) => {
                    const userAnswer = selectedAnswers[question.id];
                    const correctAnswer = question.options.find(
                        (opt) => opt.correct
                    );
                    const isCorrect = userAnswer?.isCorrect;
                    return (
                        <div
                            key={question.id}
                            className={`${
                                isCorrect ? 'bg-green-100' : 'bg-orange-100'
                            } p-3 flex-grow rounded-lg`}
                        >
                            <p className="font-semibold">{question.question}</p>
                            <p className="text-sm">{correctAnswer?.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnswersSection;
