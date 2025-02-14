import GameHeader from '@/components/game/GameHeader';

const GamePage = () => {

    return (
        <div className='flex flex-col items-center'>
            <div className='w-full sm:w-1/2 md:w-1/3 h-1/2 px-10 rounded-xl'>
                <div>
                    <GameHeader />
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
        </div>
    );
};

export default GamePage;
