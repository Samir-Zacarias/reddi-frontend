import FiltersSection from "@/src/components/features/admin/dashboard/partners/FiltersSection";
import RestaurantList, {
  RestaurantListProps,
} from "@/src/components/features/admin/dashboard/partners/RestaurantList";
import { Restaurant } from "@/src/lib/admin/type";

const businessSelect = [
  { value: "res", label: "Restaurante" },
  { value: "caf", label: "Cafetería" },
];

const stateSelect = [
  { value: "open", label: "Activo" },
  { value: "closed", label: "Inactivo" },
];

const mockRestaurants: Restaurant[] = [
  {
    id: "#12345",
    name: "Pizza express",
    nit: "900123456-7",
    address: "Calle 123#2322",
    type: "Restaurante",
    totalOrders: "1,247",
    state: "open",
  },
  {
    id: "#12346",
    name: "Super Burger",
    nit: "900123456-8",
    address: "Avenida 45#12-3",
    type: "Comida Rápida",
    totalOrders: "980",
    state: "closed",
  },
  {
    id: "#12347",
    name: "Café del Sol",
    nit: "900123456-9",
    address: "Carrera 7#82-10",
    type: "Cafetería",
    totalOrders: "2,510",
    state: "open",
  },
  {
    id: "#12348",
    name: "Tacos el Jefe",
    nit: "900123457-0",
    address: "Transversal 5#11-9",
    type: "Restaurante",
    totalOrders: "753",
    state: "closed",
  },
  {
    id: "#12349",
    name: "Sushi Time",
    nit: "900123457-1",
    address: "Calle 90#15-50",
    type: "Restaurante",
    totalOrders: "1,890",
    state: "open",
  },
];

const data: RestaurantListProps = {
  restaurants: mockRestaurants,
  totalCount: mockRestaurants.length,
};

export default function AdminPartnerPage() {
  return (
    <div className="bg-[#F0F2F5] px-8 py-6 min-h-screen">
      {/* Título */}
      <h1 className="font-semibold">Gestión de aliados</h1>
      <h2 className="font-roboto font-normal mb-5">
        Comprueba los datos de tus aliados
      </h2>
      {/* Fila 1: Sección de filtros */}
      <FiltersSection businessTypes={businessSelect} states={stateSelect} />

      {/* Fila 2: Tabla de Restaurants */}
      <RestaurantList
        restaurants={data.restaurants}
        totalCount={data.totalCount}
      />
    </div>
  );
}
