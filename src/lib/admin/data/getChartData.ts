import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

const apiDelay = 500;

export default async function getChartData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return "Componente de gráfico";
}
