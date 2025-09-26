"use server";

import StatCardSection from "./StatCardSection";
import getStatsData from "@/src/lib/admin/data/dashboard/getStatsData";

export default async function StatSectionServer() {
  const statsData = await getStatsData();
  return <StatCardSection stats={statsData} />;
}
