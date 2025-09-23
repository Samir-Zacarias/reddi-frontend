import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { MainStatsData } from "../../type";

const apiDelay = 500;

const statsData: MainStatsData[] = [
  { statKey: "active_orders", value: "$350.4" },
  { statKey: "today_earnings", value: "$642.39" },
  { statKey: "delivered_orders", value: "2935" },
  { statKey: "active_products", value: "2935" },
];

export default async function getMainStatsData() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return statsData;
}
