import StatCardSection from "@/src/components/features/admin/dashboard/stats/StatCardSection";
import MapCard from "@/src/components/features/admin/dashboard/mapcard/MapCard";
import ChartCard from "@/src/components/features/admin/dashboard/mapcard/ChartCard";
import RecentOrdersTable from "@/src/components/features/admin/dashboard/recentsOrders/RecentOrderTable";
import RealTimeAlerts from "@/src/components/features/admin/dashboard/realTimeAlerts/RealTimeAlerts";

// Datos de ejemplo para las tarjetas de estadísticas
const statsData = [
  { title: "Pedidos de hoy", value: "$350.4" },
  { title: "Ventas totales", value: "$642.39" },
  { title: "Repartidores activos", value: "$574.34" },
  { title: "Aliados activos", value: "2935" },
  { title: "Usuarios nuevos", value: "2935" },
];

export default function DashboardPage() {
  return (
    <div className="bg-[#F0F2F5] p-8">
      {/* Fila 1: Tarjetas de Estadísticas */}
      <StatCardSection stats={statsData} />

      {/* Fila 2 y 3: Layout de Rejilla Principal */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Mapa - Ocupa 6 de 12 columnas en desktop */}
        <div className="lg:col-span-6">
          <MapCard />
        </div>

        {/* Gráfico - Ocupa 6 de 12 columnas en desktop */}
        <div className="lg:col-span-6">
          <ChartCard />
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
