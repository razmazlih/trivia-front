'use client';
const Answers = () => {
    const answers = [
        { id: 1, answer: 'Paris', correct: true },
        { id: 2, answer: 'Berlin', correct: false },
        { id: 3, answer: 'London', correct: false },
        { id: 4, answer: 'Madrid', correct: false },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-5">
            {answers.map((answer) => (
                <p
                    key={answer.id}
                    className="border-2 border-gray-200 rounded-lg px-4 py-2 text-center cursor-pointer"
                >
                    {answer.answer}
                </p>
            ))}
        </div>
    );
};

export default Answers;
