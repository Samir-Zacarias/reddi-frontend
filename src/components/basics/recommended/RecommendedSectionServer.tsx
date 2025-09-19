import { getRecommendedData } from "@/src/lib/basics/data";
import RecommendedSection from "./RecommendedSection";

export default async function RecommendedSectionServer() {
  const data = await getRecommendedData();
  return <RecommendedSection recommendedItems={data}></RecommendedSection>;
}
