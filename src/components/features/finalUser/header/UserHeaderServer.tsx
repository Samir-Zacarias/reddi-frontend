import UserHeader from "./UserHeader";
import { getHeaderData } from "@/src/lib/finalUser/data";

export default async function UserHeaderServer() {
  const userData = await getHeaderData();
  return <UserHeader userData={userData} />;
}
