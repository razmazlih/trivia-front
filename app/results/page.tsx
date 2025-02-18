import MainNavbar from "@/components/landing/MainNavbar";
import AnswersSection from "@/components/results/AnswersSection";
import HeaderSection from "@/components/results/HeaderSection";
import PerformanceSection from "@/components/results/PerformanceSection";

const resultPage = () => {
  return (
    <div className="flex flex-col items-center">
        <MainNavbar />
        <div className="mt-10 sm:mt-16">
        <HeaderSection />
        </div>
        <div className="w-11/12 mt-10">
        <AnswersSection />
        </div>
        <div className="w-11/12 mt-5">
          <PerformanceSection />
        </div>
    </div>
);
}

export default resultPage