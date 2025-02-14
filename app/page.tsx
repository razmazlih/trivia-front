import MainFooter from "@/components/landing/MainFooter";
import MainNavbar from "@/components/landing/MainNavbar";
import MainSection from "@/components/landing/MainSection";

const MainPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <MainNavbar />
            <div className="flex-grow mt-10 sm:mt-16">
                <MainSection />
            </div>
            <MainFooter />
        </div>
    );
};

export default MainPage;
