import MainNavbar from "@/components/landing/MainNavbar";
import MainSection from "@/components/landing/MainSection";

const MainPage = () => {
    return (
        <div>
            <MainNavbar />
            <div className="mt-7 sm:mt-16">
            <MainSection />
            </div>
        </div>
    );
};

export default MainPage;
