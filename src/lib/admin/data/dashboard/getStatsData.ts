import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

const apiDelay = 500;

const statsData = [
  { title: "Pedidos de hoy", value: "$350.4" },
  { title: "Ventas totales", value: "$642.39" },
  { title: "Repartidores activos", value: "$574.34" },
  { title: "Aliados activos", value: "2935" },
  { title: "Usuarios nuevos", value: "2935" },
];

export default async function getStatsData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return statsData;
}
