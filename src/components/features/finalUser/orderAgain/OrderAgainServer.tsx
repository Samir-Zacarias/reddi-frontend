import OrderAgainSection from "./OrderAgainSection";
import getOrderAgainData from "@/src/lib/finalUser/home/data/getOrderAgainData";

export default async function OrderAgainServer() {
  const userData = await getOrderAgainData();
  return <OrderAgainSection items={userData} />;
}
