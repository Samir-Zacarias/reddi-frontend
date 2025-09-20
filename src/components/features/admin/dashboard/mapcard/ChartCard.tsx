import { CardShell } from "@/src/components/features/admin/dashboard/mapcard/MapCard";

export default function ChartCard() {
  return (
    <CardShell title="Evolución de Ingresos">
      <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Componente de gráfico</p>
      </div>
    </CardShell>
  );
}
