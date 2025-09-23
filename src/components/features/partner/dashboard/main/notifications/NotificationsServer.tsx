import Notifications from "./Notifications";
import getNotificationsData from "@/src/lib/partner/dashboard/data/main/getNotificationsData";

export default async function NotificationsServer() {
  const data = await getNotificationsData();
  return <Notifications notifications={data} />;
}
