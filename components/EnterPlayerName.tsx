'use client';
import { Button, Form, Input } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EnterPlayerName = () => {
    const [name, setName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inError, setInError] = useState<boolean>(false);
    const router = useRouter();

    const hundleClick = () => {
        setInError(false);
        if (name) {
            console.log(`Welcome ${name}!`);
            setIsLoading(true);
            router.push('/game');
        } else {
            setInError(true);
        }
    };
    return (
        <div className="mt-5">
            <div className="flex gap-3 justify-center w-full">
                <div className="w-7/12">
                    <Input
                        value={name}
                        onValueChange={setName}
                        placeholder="Enter your Name"
                        errorMessage="please Enter your Name"
                        isInvalid={inError}
                    />
                </div>
                <div>
                    <Button
                        isLoading={isLoading}
                        color="primary"
                        type="submit"
                        onPress={hundleClick}
                    >
                        Start New Trivia Game
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EnterPlayerName;
