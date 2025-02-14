'use client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

const NavigateButtons = () => {
    const router = useRouter()
    return (
        <div className='flex justify-between mt-2 px-2'>
            <Button onPress={() => router.push('/')} color="primary" className="text-white" radius="lg">
                Previous
            </Button>
            <Button color="primary" className="text-white" radius="lg">
                Next
            </Button>
        </div>
    );
};

export default NavigateButtons;
