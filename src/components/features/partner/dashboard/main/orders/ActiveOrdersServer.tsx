import ActiveOrders from "./ActiveOrders";
import getOrdersData from "@/src/lib/partner/dashboard/data/main/getOrdersData";

export default async function ActiveOrdersServer() {
  const data = await getOrdersData();
  return <ActiveOrders orders={data} />;
}
