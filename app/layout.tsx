import { GameProvider } from '@/contexts/GameContext';
import './globals.css';
import { Question } from '@/lib/types';
import { BASE_API_URL } from '@/lib/config';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const res = await fetch(`${BASE_API_URL}/api/questions`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch questions');
    }
    const questions: Question[] = await res.json();

    return (
        <html lang="en">
            <body>
                <GameProvider initialQuestions={questions}>
                    {children}
                </GameProvider>
            </body>
        </html>
    );
}
