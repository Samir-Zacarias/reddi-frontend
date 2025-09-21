import FeaturedCategories from "@/src/components/features/main/categories/FeaturedCategories";
import PromoSliderServer from "@/src/components/basics/promos/PromoSliderServer";
import PromoSliderSkeleton from "@/src/components/basics/promos/PromoSliderSkeleton";
import RecommendedSectionServer from "@/src/components/basics/recommended/RecommendedSectionServer";
import SliderSectionSkeleton from "@/src/components/basics/itemsSlider/SliderSectionSkeleton";
import { Suspense } from "react";
import UserFooter from "@/src/components/basics/UserFooter";
//import SearchBar from "@/src/components/features/main/SearchBar";

export default function Home() {
  return (
    <>
      {/*<SearchBar className="p-3 md:px-12" />*/}
      <main className="pt-[9rem] pb-[4.45rem]">
        {/*Sección de botones pequeños*/}
        <section className="p-4">
          <FeaturedCategories />
        </section>
        {/*Sección de promociones*/}
        <section className="px-4 pb-6">
          <Suspense fallback={<PromoSliderSkeleton />}>
            <PromoSliderServer />
          </Suspense>
        </section>
        {/*Sección de recomendaciones*/}
        <section className="px-4">
          <Suspense fallback={<SliderSectionSkeleton />}>
            <RecommendedSectionServer />
          </Suspense>
        </section>
      </main>
      <UserFooter />
    </>
  );
}
