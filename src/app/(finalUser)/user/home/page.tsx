import FeaturedCategories from "@/src/components/features/main/categories/FeaturedCategories";
import LargeCategoryGrid from "@/src/components/features/finalUser/largeCategory/LargeCategoryGrid";
import PromoSliderServer from "@/src/components/features/finalUser/promos/PromoSliderServer";
import PromoSliderSkeleton from "@/src/components/features/finalUser/promos/PromoSliderSkeleton";
import RecommendedSection from "@/src/components/basics/recommended/RecommendedSection";
import OrderAgainSkeleton from "@/src/components/basics/itemsSlider/SliderSectionSkeleton";
import OrderAgainServer from "@/src/components/features/finalUser/orderAgain/OrderAgainServer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <LargeCategoryGrid />
      <FeaturedCategories />
      <Suspense fallback={<PromoSliderSkeleton />}>
        <PromoSliderServer />
      </Suspense>
      <RecommendedSection />
      <Suspense fallback={<OrderAgainSkeleton />}>
        <OrderAgainServer />
      </Suspense>
    </>
  );
}
