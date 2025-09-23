import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { Order } from "@/src/lib/partner/dashboard/type";

const apiDelay = 500;

const data: Order[] = [
  {
    id: "001",
    name: "Margherita x2",
    details: "Mesa 3 - 16:30",
    status: "Preparando",
  },
  {
    id: "002",
    name: "Hamburguesa Deluxe",
    details: "Delivery - 15:45",
    status: "Listo",
  },
  {
    id: "003",
    name: "Ensalada César",
    details: "Mesa 2 - 16:00",
    status: "Nuevo",
  },
  {
    id: "004",
    name: "Tacos al Pastor",
    details: "Delivery - 16:15",
    status: "En camino",
  },
];

export default async function getStatsData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return data;
}
