import MainNavbar from "@/components/landing/MainNavbar";
import HeaderSection from "@/components/results/HeaderSection";

const resultPage = () => {
  return (
    <div className="flex flex-col items-center">
        <MainNavbar />
        <div className="mt-10 sm:mt-16">
        <HeaderSection />
        </div>
    </div>
);
}

export default resultPage