import { PromoCardProps } from "@/src/components/basics/promos/PromoCard";
// Utilidad para el tiempo de respuesta de la API
import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

const apiDelay = 500;

// PromoSliderServer.tsx
// PromoCardProps[]
export default async function getPromosData(): Promise<PromoCardProps[]> {
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
