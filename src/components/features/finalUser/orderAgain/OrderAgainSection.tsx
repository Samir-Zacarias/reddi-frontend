import SliderSection from "@/src/components/basics/itemsSlider/SliderSection";
import { SliderCardProps } from "@/src/components/basics/itemsSlider/SliderItem";

export default function OrderAgainSection({
  items,
}: {
  items: SliderCardProps[];
}) {
  return (
    <SliderSection cards={items} title={"Pide otra vez"} href="/pedidos" />
  );
}
