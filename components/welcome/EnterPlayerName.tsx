"use client";
import { usePlayer } from "@/contsxt/PlayerContext";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EnterPlayerName = () => {
    const { setPlayerName } = usePlayer();
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [inError, setInError] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setInError(false);
        if (name.length > 1) {
            setPlayerName(name);
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
                        errorMessage="please Enter your Name (at least 2 characters)"
                        isInvalid={inError}
                    />
                </div>
                <div>
                    <Button
                        isLoading={isLoading}
                        color="primary"
                        type="submit"
                        onPress={handleClick}
                    >
                        Start New Trivia Game
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EnterPlayerName;