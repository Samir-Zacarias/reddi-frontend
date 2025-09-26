import TableHeader from "./TableHeader";
import RestaurantListItem from "./RestaurantListItem";
import PaginButtons from "./PaginButtons";
import { Restaurant } from "@/src/lib/admin/type";

const itemsPerPage = 5; // Número de ítems por página

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
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <div className="bg-white rounded-lg overflow-hidden mt-6 px-6">
      {/* Encabezado */}
      <div className="py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800 font-montserrat">
          Lista de Usuarios
        </h1>
        <span className="text-sm text-[#6A6C71] font-roboto">
          {formattedTotal} usuarios encontrados
        </span>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto border border-[#D9DCE3] rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader />
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
          1 - {itemsPerPage} de {totalPages} Páginas
        </p>
        <div className="flex items-center gap-2">
          <PaginButtons />
        </div>
      </div>
    </div>
  );
}
