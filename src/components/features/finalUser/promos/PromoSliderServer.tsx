import PromoSlider from "./PromoSlider";
import { getPromosData } from "@/src/lib/finalUser/data";

export default async function PromoSliderServer() {
  const promotions = await getPromosData();
  return <PromoSlider promotions={promotions} />;
}
