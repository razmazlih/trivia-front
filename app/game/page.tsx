import AnswerSelectRadio from '@/components/game/AnswerSelectRadio';
import GameHeader from '@/components/game/GameHeader';
import Quest from '@/components/game/Quest';
import SubmitButton from '@/components/game/SubmitButton';

const GamePage = () => {

    return (
        <div className='flex flex-col items-center'>
            <div className='w-full sm:w-10/12 m-w-9-12 lg:w-8/12 h-1/2 px-10 rounded-xl'>
                <div>
                    <GameHeader />
                </div>
                <div className='mt-5'>
                    <Quest />
                </div>
                <div className='mt-10'>
                    <AnswerSelectRadio />
                </div>
                <div>
                    <SubmitButton />
                </div>
            </div>
        </div>
    );
};

export default GamePage;
