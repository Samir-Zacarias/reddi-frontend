import FiltersSection from "./FiltersSection";
import TableHeader from "./TableHeader";

const businessSelect = [
  { value: "res", label: "Restaurante" },
  { value: "caf", label: "Cafetería" },
];

const stateSelect = [
  { value: "open", label: "Activo" },
  { value: "closed", label: "Inactivo" },
];

export default function ClientShell() {
  return (
    <>
      {/* 1. SECCIÓN DE FILTROS (antes FilterSections) */}
      <FiltersSection businessTypes={businessSelect} states={stateSelect} />

      {/* 2. TABLA DE RESTAURANTES (antes RestaurantListServer) */}
      <div className="bg-white rounded-lg overflow-hidden mt-6 px-6">
        <div className="py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-800 font-montserrat">
            Lista de Usuarios
          </h1>
          <span className="text-sm text-[#6A6C71] font-roboto">
            1 usuarios encontrados
          </span>
        </div>
        <div className="overflow-x-auto border border-[#D9DCE3] rounded-xl">
          <table>
            <TableHeader />
          </table>
        </div>
      </div>
    </>
  );
}
