import DishesSection from "./DishesSection";
import getDishesData from "@/src/lib/partner/dashboard/data/products/getDishesData";

import { dishesTags } from "@/src/lib/type";

export default async function DishesServer() {
  const data = await getDishesData();
  return (
    <DishesSection dishes={data} categories={dishesTags} tags={dishesTags} />
  );
}
