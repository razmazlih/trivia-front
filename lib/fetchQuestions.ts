import { Question } from '@/lib/types';
import { BASE_API_URL } from '@/lib/config';

export async function fetchQuestions(): Promise<Question[]> {
    const res = await fetch(`${BASE_API_URL}/api/questions`, {
        cache: 'force-cache',
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch questions');
    }
    return res.json();
}