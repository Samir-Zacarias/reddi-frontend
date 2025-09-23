import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { ProductsStatsData } from "../../type";

const apiDelay = 500;

const statsData: ProductsStatsData[] = [
  { statKey: "active_products", value: "$350.4" },
  { statKey: "most_sold", value: "$642.39" },
  { statKey: "inactive_products", value: "2935" },
];

export default async function getProductsStatsData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return statsData;
}
