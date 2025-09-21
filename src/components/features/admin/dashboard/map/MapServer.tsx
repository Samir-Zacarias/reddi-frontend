import MapCard from "@/src/components/features/admin/dashboard/map/MapCard";
import getMapData from "@/src/lib/admin/data/getMapData";

export default async function MapServer() {
  const data = await getMapData();
  return <MapCard data={data} />;
}
