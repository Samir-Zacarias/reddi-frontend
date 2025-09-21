import ChartCard from "@/src/components/features/admin/dashboard/chart/ChartCard";
import getChartData from "@/src/lib/admin/data/getChartData";

export default async function ChartServer() {
  const data = await getChartData();
  return <ChartCard data={data} />;
}
