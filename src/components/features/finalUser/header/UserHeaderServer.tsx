import UserHeader from "./UserHeader";
import getHeaderData from "@/src/lib/finalUser/header/data/getHeaderData";

export default async function UserHeaderServer() {
  const userData = await getHeaderData();
  return <UserHeader userData={userData} />;
}
