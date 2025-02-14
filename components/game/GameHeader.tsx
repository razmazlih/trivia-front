'use client';
import { usePlayer } from '@/contsxt/PlayerContext';

const GameHeader = () => {
    const { playerName } = usePlayer();

  return (
    <div className='flex justify-between mt-10'>
        <h1 className='text-2xl font-semibold'>Welcome, {playerName || 'Guest'}!</h1>
        <p className='text-lg bg-secondary-200 rounded-lg px-2 flex items-center text-secondary-700'>dificulty</p>
    </div>
  )
}

export default GameHeader