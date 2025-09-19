import { SliderCardProps } from "@/src/components/basics/itemsSlider/SliderItem";
import { HeaderData } from "@/src/lib/finalUser/type";
import { PromoCardProps } from "@/src/components/features/finalUser/promos/PromoCard";

// Utilidad para el tiempo de respuesta de la API
import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

const apiDelay = 500;

// UserHeaderServer.tsx
// HeaderData
export async function getHeaderData(): Promise<HeaderData> {
  console.log("Fetching user data on the server...");
  // Simulación de llamada API
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  const data: HeaderData = {
    userName: "Pepito Núñez",
    address: [
      {
        id: 1,
        address: "Muelle 03, 93",
        label: "Yate",
      },
      {
        id: 2,
        address: "Muelle 03, 93",
        label: "Villa",
      },
    ],
    notificationCount: 8,
    carCount: 2,
  };
  return data;
}

// OrderAgainServer.tsx
// SliderCardProps[]
export async function getOrderAgainData(): Promise<SliderCardProps[]> {
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

// PromoSliderServer.tsx
// PromoCardProps[]
export async function getPromosData(): Promise<PromoCardProps[]> {
  console.log("Fetching user data on the server...");
  // Simulación de llamada API
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  const data = [
    {
      title: "35% off en tu primera compra",
      subtitle: "Válido para pedidos de RD$700",
      code: "Usa el código de REDDINOW.",
      buttonText: "Claim deal",
      imageUrl: "/pizza-promo.svg",
      bgColor: "bg-orange-100",
      href: "/deals/reddinow",
    },
    {
      title: "Envío Gratis en Pollo",
      subtitle: "En pedidos sobre RD$500",
      code: "Usa el codigo POLLITO.",
      buttonText: "Ver ofertas",
      imageUrl: "/pizza-promo.svg",
      bgColor: "bg-green-200",
      href: "/deals/pollo-gratis",
    },
  ];
  return data;
}
