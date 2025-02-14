'use client';

import EnterPlayerName from './EnterPlayerName';
import InfoSection from './InfoSection';

export default function StartGame() {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full">
                <EnterPlayerName />
            </div>
            <div>
                <InfoSection />
            </div>
        </div>
    );
}
