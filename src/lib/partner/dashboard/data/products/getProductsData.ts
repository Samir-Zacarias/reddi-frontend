import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { ProductData } from "@/src/lib/partner/dashboard/type";

import { API_DELAY } from "@/src/lib/type";

const mockProducts: ProductData[] = [
  {
    id: "1",
    name: "BANANA",
    description: "UNIDAD FRESCA",
    price: 0.5,
    currency: "USD",
    imageUrl: "/banana.svg",
  },
  {
    id: "2",
    name: "ALBAHACA FRESCA",
    description: "BOLSA 50 gr",
    price: 9.0,
    currency: "USD",
    imageUrl: "/albahaca.svg",
  },
  {
    id: "3",
    name: "RÁBANOS",
    description: "MANOJO FRESCO",
    price: 3.25,
    currency: "USD",
    imageUrl: "/cebolla.svg",
  },
  {
    id: "4",
    name: "ARÁNDANOS",
    description: "CAJA 125 gr",
    price: 4.5,
    currency: "USD",
    imageUrl: "/albahaca.svg",
  },
  {
    id: "5",
    name: "TOMATE CHONTO",
    description: "BOLSA 500 gr",
    price: 2.0,
    currency: "USD",
    imageUrl: "/uvas.svg",
  },
  {
    id: "6",
    name: "LECHUGA ROMANA",
    description: "UNIDAD",
    price: 1.8,
    currency: "USD",
    imageUrl: "/tomate.svg",
  },
];

export default async function getProductsData() {
  await new Promise((resolve) =>
    setTimeout(resolve, API_DELAY * getRandomNumberFrom1To10())
  );
  return mockProducts;
}
