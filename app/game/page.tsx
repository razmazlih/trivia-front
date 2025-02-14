'use client';
import { usePlayer } from '@/contsxt/PlayerContext';
import React from 'react';

const GamePage = () => {
    const { playerName } = usePlayer();

    return (
        <div>
            <div>
            <h1>Welcome, {playerName || 'Guest'}!</h1>
            </div>
            <div>
                question
            </div>
            <div>
                answers
            </div>
            <div>
                submit
            </div>
            <div>
                progress
            </div>
        </div>
    );
};

export default GamePage;
