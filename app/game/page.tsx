import MainNavbar from '@/components/landing/MainNavbar';
import Game from '@/components/questions/Game';

export default function GamePage() {
    return (
        <div className="flex flex-col items-center">
            <MainNavbar /> <Game />
        </div>
    );
}
