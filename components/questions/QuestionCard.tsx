'use client';
import { Card, CardHeader } from '@heroui/react';
import React from 'react';
import Answers from './Answers';

const QuestionCard = () => {
    return (
        <Card>
            <CardHeader className="min-w-full flex flex-col items-start">
                <h1 className="text-xl font-bold mt-2">
                    What the capital of France?
                </h1>
                <Answers />
            </CardHeader>
        </Card>
    );
};

export default QuestionCard;
