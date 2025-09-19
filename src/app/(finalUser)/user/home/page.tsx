import FeaturedCategories from "@/src/components/features/main/categories/FeaturedCategories";
import LargeCategoryGrid from "@/src/components/features/finalUser/largeCategory/LargeCategoryGrid";
import PromoSliderServer from "@/src/components/features/finalUser/promos/PromoSliderServer";
import PromoSliderSkeleton from "@/src/components/features/finalUser/promos/PromoSliderSkeleton";
import RecommendedSectionServer from "@/src/components/basics/recommended/RecommendedSectionServer";
import SliderSectionSkeleton from "@/src/components/basics/itemsSlider/SliderSectionSkeleton";
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
      <Suspense fallback={<SliderSectionSkeleton />}>
        <RecommendedSectionServer />
      </Suspense>
      <Suspense fallback={<SliderSectionSkeleton />}>
        <OrderAgainServer />
      </Suspense>
    </>
  );
}
