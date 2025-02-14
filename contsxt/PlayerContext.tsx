'use client';
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

type PlayerContextType = {
    playerName: string;
    setPlayerName: Dispatch<SetStateAction<string>>;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
    const [playerName, setPlayerName] = useState(localStorage.getItem('playerName') ||'');

    return (
        <PlayerContext.Provider value={{ playerName, setPlayerName }}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayer must be used within a PlayerProvider");
    }
    return context;
};