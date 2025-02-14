'use client';
import { usePlayer } from '@/contsxt/PlayerContext';
import React, { useEffect } from 'react';

const GamePage = () => {
    const { playerName } = usePlayer();

    return (
        <div>
            <h1>Welcome, {playerName || 'Guest'}!</h1>
        </div>
    );
};

export default GamePage;