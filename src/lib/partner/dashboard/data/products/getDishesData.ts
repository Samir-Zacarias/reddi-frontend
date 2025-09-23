import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { DishData } from "@/src/lib/partner/dashboard/type";

const apiDelay = 500;

const mockProducts: DishData[] = [
  {
    id: "1",
    name: "La Bonga del Sinú",
    imageUrl: "/tacos.svg",
    rating: "4.8",
    reviewCount: 254,
    deliveryTime: "25-30 min",
    deliveryFee: "0$ tarifa de envío",
  },
  {
    id: "2",
    name: "Alitas 100",
    imageUrl: "/alitas100.svg",
    rating: "4.8",
    reviewCount: 254,
    deliveryTime: "25-30 min",
    deliveryFee: "0$ tarifa de envío",
  },
  {
    id: "3",
    name: "el pollito feliz",
    imageUrl: "/pollitofeliz.svg",
    rating: "4.8",
    reviewCount: 254,
    deliveryTime: "25-30 min",
    deliveryFee: "0$ tarifa de envío",
  },
  {
    id: "4",
    name: "Pizzas y más",
    imageUrl: "/pizzaymas.svg",
    rating: "4.8",
    reviewCount: 254,
    deliveryTime: "25-30 min",
    deliveryFee: "0$ tarifa de envío",
  },
];

export default async function getDishesData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return mockProducts;
}
