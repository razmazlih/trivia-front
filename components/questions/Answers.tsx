'use client';

import { useState } from 'react';

const Answers = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const answers = [
        { id: 'a', text: 'Paris', correct: true },
        { id: 'b', text: 'Berlin', correct: false },
        { id: 'c', text: 'London', correct: false },
        { id: 'd', text: 'Madrid', correct: false },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-5">
            {answers.map((answer) => (
                <p
                    key={answer.id}
                    onClick={() => setSelected(answer.id)}
                    className={`border-2 rounded-lg px-4 py-2 text-center cursor-pointer transition-all ${
                        answer.id === selected
                            ? 'text-orange-600 border-orange-600 bg-orange-100'
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
