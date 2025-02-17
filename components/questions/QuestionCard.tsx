'use client';
import { Card, CardHeader } from '@heroui/react';
import Answers from './Answers';
import { QuestionCardProps } from '@/lib/types';

const QuestionCard = ({ question }: QuestionCardProps) => {
    return (
        <Card>
            <CardHeader className="select-none min-w-full flex flex-col items-start">
                <h1 className="text-xl font-bold mt-2">{question.question}</h1>
                <Answers answers={question.options} />
            </CardHeader>
        </Card>
    );
};

export default QuestionCard;
