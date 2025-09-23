import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { Notification } from "@/src/lib/partner/dashboard/type";

const apiDelay = 500;

const data: Notification[] = [
  {
    id: "n1",
    type: "error",
    title: "Stock bajo",
    description: "Pizza Pepperoni tiene menos de 5 unidades",
    time: "Hace 30 min",
  },
  {
    id: "n2",
    type: "info",
    title: "Nuevo pedido",
    description: "Pedido #004 recibido por $35.50",
    time: "Hace 1 hora",
  },
  {
    id: "n3",
    type: "success",
    title: "Pedido completado",
    description: "Pedido #998 entregado exitosamente",
    time: "Hace 2 horas",
  },
];

export default async function getNotificationsData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return data;
}
