import CardShell from "../../CardShell";

// De momento data es un string, pero en el futuro será un objeto con los datos necesarios para renderizar el mapa

export default function MapCard({ data }: { data: string }) {
  return (
    <CardShell title="Evolución de Ingresos">
      <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">{data}</p>
      </div>
    </CardShell>
  );
}
