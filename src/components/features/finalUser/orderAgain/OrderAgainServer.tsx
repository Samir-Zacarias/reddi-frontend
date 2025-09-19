import OrderAgainSection from "./OrderAgainSection";
import { getOrderAgainData } from "@/src/lib/finalUser/data";

export default async function OrderAgainServer() {
  const userData = await getOrderAgainData();
  return <OrderAgainSection items={userData} />;
}
