import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TransformationSection from "./components/TransformationSection";
import CTASection from "./components/CTASection";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <TransformationSection />
            <CTASection />
        </main>
    );
}
