export function CardShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 font-roboto">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function MapCard() {
  return (
    <CardShell title="Evolución de Ingresos">
      <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Componente de mapa</p>
      </div>
    </CardShell>
  );
}
