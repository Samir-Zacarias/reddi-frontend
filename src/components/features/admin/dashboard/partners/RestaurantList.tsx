// app/components/UserList.tsx

import RestaurantListItem from "./RestaurantListItem";
import { Restaurant } from "@/src/lib/admin/type";

// Icono para la ordenación
const SortIcon = () => (
  <svg
    className="h-4 w-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
    />
  </svg>
);

// Definimos las props para el componente de lista
export interface RestaurantListProps {
  restaurants: Restaurant[];
  totalCount: number;
}

export default function RestaurantList({
  restaurants,
  totalCount,
}: RestaurantListProps) {
  // Formatear el número para que tenga separador de miles
  const formattedTotal = new Intl.NumberFormat("es-CO").format(totalCount);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Encabezado */}
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Lista de Usuarios</h1>
        <span className="text-sm text-gray-500">
          {formattedTotal} usuarios encontrados
        </span>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* Usamos un map para evitar repetir código en los headers */}
              {[
                "Id aliado",
                "Nombre del negocio",
                "NIT",
                "Dirección",
                "Tipo de Negocio",
                "Total Pedidos",
                "Estado",
                "Acciones",
              ].map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center gap-2">
                    {header}
                    {/* Añadimos el icono de ordenar en algunas columnas */}
                    {[
                      "Id aliado",
                      "Nombre del negocio",
                      "Total Pedidos",
                    ].includes(header) && <SortIcon />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {restaurants.map((restaurant) => (
              <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Paginación (UI estática por ahora) */}
      <div className="p-4 flex items-center justify-between border-t border-gray-200">
        <p className="text-sm text-gray-700">
          1 - 10 of {restaurants.length} Pages
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">The page on</span>
          <button className="px-3 py-1 border rounded-md text-sm">1</button>
          <div className="flex gap-1">
            <button className="p-2 border rounded-md">&lt;</button>
            <button className="p-2 border rounded-md">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
