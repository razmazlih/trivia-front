import MainHeader from '@/components/MainHeader';
import StartGame from '@/components/StartGame';

const MainPage = () => {
    return (
        <div className="flex flex-col items-center">
            <MainHeader />
            <StartGame />
        </div>
    );
};

export default MainPage;
