import SliderSection from "@/src/components/basics/itemsSlider/SliderSection";
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
export default function RecommendedSection() {
  return (
    <SliderSection
      cards={recommendedItems}
      title={"Recomendados para ti"}
      href="/recomendados"
    />
  );
}
