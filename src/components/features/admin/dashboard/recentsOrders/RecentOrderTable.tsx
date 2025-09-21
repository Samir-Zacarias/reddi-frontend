import CardShell from "../../CardShell";

const orders = [
  {
    id: "#1247",
    client: "María González",
    total: "$45.90",
    status: "Entregado",
    time: "2 min",
  },
  {
    id: "#1248",
    client: "Carlos Ruiz",
    total: "$32.50",
    status: "En camino",
    time: "5 min",
  },
  {
    id: "#1249",
    client: "Ana López",
    total: "$67.80",
    status: "Preparando",
    time: "8 min",
  },
];

const statusStyles: { [key: string]: string } = {
  Entregado: "bg-green-100 text-green-700",
  "En camino": "bg-blue-100 text-blue-700",
  Preparando: "bg-yellow-100 text-yellow-700",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
        statusStyles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}

export default function RecentOrdersTable() {
  return (
    <CardShell title="Pedidos Recientes">
      <div className="overflow-x-auto overflow-y-auto max-h-72">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase border-b">
            <tr>
              <th scope="col" className="px-4 py-3">
                ID
              </th>
              <th scope="col" className="px-4 py-3">
                Cliente
              </th>
              <th scope="col" className="px-4 py-3">
                Total
              </th>
              <th scope="col" className="px-4 py-3">
                Estado
              </th>
              <th scope="col" className="px-4 py-3">
                Tiempo
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-4 py-3">{order.client}</td>
                <td className="px-4 py-3">{order.total}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={order.status} />
                </td>
                <td className="px-4 py-3">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardShell>
  );
}
