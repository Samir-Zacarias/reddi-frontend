import StatSectionSkeleton from "@/src/components/features/admin/dashboard/stats/StatSectionSkeleton";
import StatSectionServer from "@/src/components/features/admin/dashboard/stats/StatSectionServer";
import MapChartSkeleton from "@/src/components/features/admin/dashboard/MapChartSkeleton";
import MapServer from "@/src/components/features/admin/dashboard/map/MapServer";
import ChartServer from "@/src/components/features/admin/dashboard/chart/ChartServer";
import RecentOrdersTable from "@/src/components/features/admin/dashboard/recentsOrders/RecentOrderTable";
import RealTimeAlerts from "@/src/components/features/admin/dashboard/realTimeAlerts/RealTimeAlerts";

import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="bg-[#F0F2F5] p-8">
      {/* Fila 1: Tarjetas de Estadísticas */}
      <Suspense fallback={<StatSectionSkeleton />}>
        <StatSectionServer />
      </Suspense>

      {/* Fila 2 y 3: Layout de Rejilla Principal */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Mapa - Ocupa 6 de 12 columnas en desktop */}
        <div className="lg:col-span-6">
          <Suspense fallback={<MapChartSkeleton />}>
            <MapServer />
          </Suspense>
        </div>

        {/* Gráfico - Ocupa 6 de 12 columnas en desktop */}
        <div className="lg:col-span-6">
          <Suspense fallback={<MapChartSkeleton />}>
            <ChartServer />
          </Suspense>
        </div>

        {/* Tabla de Pedidos - Ocupa 8 de 12 columnas en desktop */}
        <div className="lg:col-span-8">
          <RecentOrdersTable />
        </div>

        {/* Alertas - Ocupa 4 de 12 columnas en desktop */}
        <div className="lg:col-span-4">
          <RealTimeAlerts />
        </div>
      </div>
    </div>
  );
}
