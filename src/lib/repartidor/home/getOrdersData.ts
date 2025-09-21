// Utilidad para el tiempo de respuesta de la API
import { StatusType } from "@/src/components/features/repartidor/home/orderSection/OrderCard";
import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { OrderData } from "@/src/lib/repartidor/type";

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

const apiDelay = 500;

export default async function getOrdersData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return data;
}
