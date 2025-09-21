import CardShell from "../CardShell";
export default function MapCard() {
  return (
    <CardShell title="Evolución de Ingresos">
      <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center animate-pulse">
        <p className="text-gray-500">Cargando...</p>
      </div>
    </CardShell>
  );
}
