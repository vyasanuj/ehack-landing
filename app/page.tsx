import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TransformationSection from "./components/TransformationSection";
import ProgramDetailsSection from "./components/ProgramDetailsSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <TransformationSection />
            <ProgramDetailsSection />
            <FAQSection />
            <CTASection />
        </main>
    );
}
