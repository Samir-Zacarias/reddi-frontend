import BenefitsSection from "@/src/components/features/main/benefits/BenefitsSection";
import FeaturedCategories from "@/src/components/features/main/categories/FeaturedCategories";
import HowItWorksSection from "@/src/components/features/main/howItWork/HowItWorksSection";
import SpecialPromosSection from "@/src/components/features/main/promos/SpecialPromosSection";
import RecommendedSection from "@/src/components/features/main/recommended/RecommendedSection";
import SearchBar from "@/src/components/features/main/SearchBar";

export default function Home() {
  return (
    <>
      <SearchBar className="p-3 md:px-12" />
      <FeaturedCategories />
      <RecommendedSection />
      <SpecialPromosSection />
      <HowItWorksSection />
      <BenefitsSection />
    </>
  );
}
