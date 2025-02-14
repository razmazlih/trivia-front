import MainHeader from '@/components/welcome/MainHeader';
import StartGame from '@/components/welcome/StartGame';

const MainPage = () => {
    return (
        <div className="flex flex-col items-center">
            <MainHeader />
            <StartGame />
        </div>
    );
};

export default MainPage;
