import { SliderCardProps } from "@/src/components/basics/itemsSlider/SliderItem";
import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

const apiDelay = 500;

// SliderCardProps[]
export default async function getOrderAgainData(): Promise<SliderCardProps[]> {
  console.log("Fetching user data on the server...");
  // Simulación de llamada API
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  const data: SliderCardProps[] = [
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
  return data;
}
