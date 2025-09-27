// Utilidad para el tiempo de respuesta de la API
import { StatusType } from "@/src/components/features/repartidor/home/orderSection/OrderCard";
import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { OrderData } from "@/src/lib/repartidor/type";
import { API_DELAY } from "@/src/lib/type";

const data: OrderData[] = [
  {
    orderId: "1",
    restaurantName: "Restaurante La Plaza",
    address: "Calle Principal 123",
    deliveryTime: "25 min",
    logoUrl: "/steakhouseorder.svg",
    status: "Nueva" as StatusType,
  },
  {
    orderId: "2",
    restaurantName: "Restaurante La Plaza",
    address: "Calle Principal 123",
    deliveryTime: "25 min",
    logoUrl: "/steakhouseorder.svg",
    status: "Recogiendo" as StatusType,
  },
  {
    orderId: "3",
    restaurantName: "Restaurante La Plaza",
    address: "Calle Principal 123",
    deliveryTime: "25 min",
    logoUrl: "/steakhouseorder.svg",
    status: "Entregando" as StatusType,
  },
  {
    orderId: "4",
    restaurantName: "Restaurante La Plaza",
    address: "Calle Principal 123",
    deliveryTime: "25 min",
    logoUrl: "/steakhouseorder.svg",
    status: "Entregando" as StatusType,
  },
];

export default async function getOrdersData() {
  await new Promise((resolve) =>
    setTimeout(resolve, API_DELAY * getRandomNumberFrom1To10())
  );
  return data;
}
