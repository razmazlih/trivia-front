export interface Option {
    id: string;
    text: string;
    correct: boolean;
}

export interface Question {
    id: number;
    question: string;
    options: Option[];
    category: string;
    difficulty: string;
}

export interface GameContextType {
    questions: Question[];
    currentQuestionIndex: number;
    selectedAnswers: Record<number, string | null>;
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    selectAnswer: (answerId: string) => void;
}

export interface AnswersProps {
    answers: Option[];
}

export interface Question {
    question: string;
    options: Option[];
}

export interface QuestionCardProps {
    question: Question;
}
