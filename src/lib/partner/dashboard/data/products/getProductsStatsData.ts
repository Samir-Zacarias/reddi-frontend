import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { ProductsStatsData } from "../../type";

import { API_DELAY } from "@/src/lib/type";

const statsData: ProductsStatsData[] = [
  { statKey: "active_products", value: "$350.4" },
  { statKey: "most_sold", value: "$642.39" },
  { statKey: "inactive_products", value: "2935" },
];

export default async function getProductsStatsData() {
  await new Promise((resolve) =>
    setTimeout(resolve, API_DELAY * getRandomNumberFrom1To10())
  );
  return statsData;
}
