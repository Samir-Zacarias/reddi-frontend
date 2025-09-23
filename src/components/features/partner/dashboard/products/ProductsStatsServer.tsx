"use server";

import StatCardSection from "@/src/components/features/partner/stats/StatCardSection";
import getProductsStatsData from "@/src/lib/partner/dashboard/data/products/getProductsStatsData";
import StatCarIcon from "@/src/components/icons/StatCarIcon";
import StatDollarIcon from "@/src/components/icons/StatDollarIcon";
import CompleteOrderIcon from "@/src/components/icons/CompleteOrderIcon";
import type { ProductsStatsData } from "@/src/lib/partner/dashboard/type";

// Mapa de Iconos
const iconMap: Record<ProductsStatsData["statKey"], React.ReactNode> = {
  active_products: <StatCarIcon fill="white" />,
  most_sold: <StatDollarIcon fill="white" />,
  inactive_products: <CompleteOrderIcon fill="white" />,
};

// Mapa de Títulos
const titleMap: Record<ProductsStatsData["statKey"], string> = {
  active_products: "Productos activos",
  most_sold: "Más vendidos",
  inactive_products: "Productos inactivos",
};

export default async function ProductsStasServer() {
  const statsData = await getProductsStatsData();
  return (
    <StatCardSection
      stats={statsData}
      iconMap={iconMap}
      titleMap={titleMap}
      getKey={(item) => item.statKey}
      getValue={(item) => item.value}
    />
  );
}
