import MainNavbar from "@/components/landing/MainNavbar";
import AnswersSection from "@/components/results/AnswersSection";
import HeaderSection from "@/components/results/HeaderSection";
import MainResultSection from "@/components/results/MainResultSection";
import PerformanceSection from "@/components/results/PerformanceSection";
import ResultsFooter from "@/components/results/ResultsFooter";
import ShareButtons from "@/components/results/ShareButtons";

const resultPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
        <MainNavbar />
        <MainResultSection/>
        <div className="w-11/12 md:w-10/12 lg: lg:w-8/12 mt-5">
          <PerformanceSection />
        </div>
        <div className="mt-10 flex-grow">
          <ShareButtons />
        </div>
        <div className='w-full'>
          <ResultsFooter />
        </div>
    </div>
);
}

export default resultPage