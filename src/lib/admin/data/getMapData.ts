import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

export default async function getMapData() {
  await new Promise((resolve) =>
    setTimeout(resolve, 500 * getRandomNumberFrom1To10())
  );
  return "Componente de mapa";
}
