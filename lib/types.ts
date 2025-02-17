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
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
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
