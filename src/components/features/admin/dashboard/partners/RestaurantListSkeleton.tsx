import Spinner from "@/src/components/basics/Spinner";

export default function RestaurantListSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden mt-6 px-6">
      {/* Encabezado */}
      <div className="py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800 font-montserrat">
          Lista de Usuarios
        </h1>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto border border-[#D9DCE3] bg-gray-200 rounded-xl h-96 animate-pulse flex items-center justify-center">
        <Spinner />
      </div>

      {/* Footer / Paginación (UI estática por ahora) */}
      <div className="p-4 flex items-center justify-between border-t border-gray-200">
        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
}
