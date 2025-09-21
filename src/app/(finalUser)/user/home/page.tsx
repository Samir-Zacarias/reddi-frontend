import FeaturedCategories from "@/src/components/features/main/categories/FeaturedCategories";
import LargeCategoryGrid from "@/src/components/features/finalUser/largeCategory/LargeCategoryGrid";
import PromoSliderServer from "@/src/components/basics/promos/PromoSliderServer";
import PromoSliderSkeleton from "@/src/components/basics/promos/PromoSliderSkeleton";
import RecommendedSectionServer from "@/src/components/basics/recommended/RecommendedSectionServer";
import SliderSectionSkeleton from "@/src/components/basics/itemsSlider/SliderSectionSkeleton";
import OrderAgainServer from "@/src/components/features/finalUser/orderAgain/OrderAgainServer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      {/*Sección de botones grandes*/}
      <section className="p-4">
        <LargeCategoryGrid />
      </section>
      {/*Sección de botones pequeños*/}
      <section className="p-4">
        <FeaturedCategories />
      </section>
      {/*Sección de promociones*/}
      <section className="p-4">
        <Suspense fallback={<PromoSliderSkeleton />}>
          <PromoSliderServer />
        </Suspense>
      </section>
      {/*Sección de recomendaciones*/}
      <section className="p-4">
        <Suspense fallback={<SliderSectionSkeleton />}>
          <RecommendedSectionServer />
        </Suspense>
      </section>
      {/*Sección de pedidos anteriores*/}
      <section className="p-4">
        <Suspense fallback={<SliderSectionSkeleton />}>
          <OrderAgainServer />
        </Suspense>
      </section>
    </>
  );
}
