import FeaturedCategories from "@/src/components/features/main/categories/FeaturedCategories";
import SliderSection from "@/src/components/basics/itemsSlider/SliderSection";
import LargeCategoryGrid from "@/src/components/features/finalUser/largeCategory/LargeCategoryGrid";
import OrderAgainSection from "@/src/components/features/finalUser/orderAgain/OrderAgainSection";
import PromoSlider from "@/src/components/features/finalUser/promos/PromoSlider";
import { SliderCardProps } from "@/src/components/basics/itemsSlider/SliderItem";

const recommendedItems: SliderCardProps[] = [
  {
    name: "Tacos de pollo y carne",
    imageUrl: "/tacos.svg",
    rating: 4.8,
    reviewCount: 254,
    deliveryTime: "25-35 min",
    deliveryFee: "$0 tarifa de envío",
    href: "/restaurantes/tacos-el-pastor",
  },
  {
    name: "Carnicería San Juan",
    imageUrl: "/sushi-carne.svg",
    rating: 4.9,
    reviewCount: 512,
    deliveryTime: "30-40 min",
    deliveryFee: "$0 tarifa de envío",
    href: "/tiendas/carniceria-san-juan",
  },
];

export default function Home() {
  return (
    <>
      <LargeCategoryGrid />
      <FeaturedCategories />
      <PromoSlider />
      <SliderSection
        cards={recommendedItems}
        title={"Recomendados para ti"}
        href="/recomendados"
      />
      <OrderAgainSection />
    </>
  );
}
