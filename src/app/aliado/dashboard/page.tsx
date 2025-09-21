import { Suspense } from "react";
import StatSectionSkeleton from "@/src/components/features/admin/dashboard/stats/StatSectionSkeleton";
import StatSectionServer from "@/src/components/features/admin/dashboard/stats/StatSectionServer";

export default function PartnerDashboardPage() {
  return (
    <div className="bg-[#F0F2F5] p-8">
      <h1 className="font-semibold">Dashboard</h1>
      <h2 className="font-roboto font-normal mb-5">Resumen de tu negocio</h2>
      {/* Fila 1: Tarjetas de Estadísticas */}
      <Suspense fallback={<StatSectionSkeleton />}>
        <StatSectionServer />
      </Suspense>
    </div>
  );
}
