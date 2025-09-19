import SliderSection from "@/src/components/basics/itemsSlider/SliderSection";
import { SliderCardProps } from "@/src/components/basics/itemsSlider/SliderItem";

export default function RecommendedSection({
  recommendedItems,
}: {
  recommendedItems: SliderCardProps[];
}) {
  return (
    <SliderSection
      cards={recommendedItems}
      title={"Recomendados para ti"}
      href="/recomendados"
    />
  );
}
