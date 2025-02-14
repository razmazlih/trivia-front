import { Button, Input } from '@heroui/react';
import React from 'react';

const EnterPlayerName = () => {
    return (
        <div className="flex gap-3 mt-5 justify-center">
            <div className='w-7/12'>
                <Input placeholder="Enter your Name" />
            </div>
            <div>
                <Button color="primary">Start New Trivia Game</Button>
            </div>
        </div>
    );
};

export default EnterPlayerName;
