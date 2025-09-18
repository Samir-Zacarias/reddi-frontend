// components/Header.tsx

import { ChevronDown } from "lucide-react";

import FiltersIcon from "@/src/components/icons/FiltersIcon";
import SearchIcon from "@/src/components/icons/SearchIcon";
import BellIcon from "@/src/components/icons/BellIcon";
import UserCarIcon from "@/src/components/icons/UserCarIcon";
import Badge from "./header/Badge";

// Definimos las props para hacer el componente dinámico y reutilizable
type HeaderProps = {
  userName: string;
  address: string;
  notificationCount?: number;
  cartCount?: number;
};

export default function Header({
  userName,
  address,
  notificationCount = 0,
  cartCount = 0,
}: HeaderProps) {
  // Puedes cambiar este color base para que coincida con tu paleta de marca

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        text-white
        rounded-b-3xl shadow-lg
        pt-safe 
        overflow-hidden // 2. Oculta cualquier parte del SVG que se salga de los bordes redondeados
      `} // INSTALAR EL PLUGIN PARA EL PTSAFE
    >
      <div
        className="
          absolute inset-0
          bg-primary
          -z-10
        "
      >
        <div
          className="
            absolute inset-0
            bg-pattern-food
            bg-repeat
            opacity-20
          "
        ></div>
      </div>
      <div className="flex flex-col space-y-4 p-4">
        {/* --- Fila Superior: Usuario y Acciones --- */}
        <div className="flex items-end justify-between">
          {/* Lado Izquierdo: Información del Usuario */}
          <div>
            <p className="text-xs opacity-90">{userName}</p>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">{address}</h1>
              <button>
                <ChevronDown
                  size={20}
                  className="bg-white text-primary rounded-full"
                />
              </button>
            </div>
          </div>

          {/* Lado Derecho: Iconos de Acción */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <BellIcon />
              <Badge count={notificationCount} />
            </button>
            <button className="relative">
              <UserCarIcon />
              <Badge count={cartCount} />
            </button>
          </div>
        </div>

        {/* --- Fila Inferior: Búsqueda y Filtros --- */}
        <div className="flex items-center gap-3">
          {/* Barra de Búsqueda */}
          <div className="relative flex-grow">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <SearchIcon />
            </div>
            <input
              type="search"
              placeholder="Busca 'Refresco'"
              className="
                w-full rounded-full border-none bg-white 
                py-3 pl-11 pr-4 
                text-gray-900 placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-green-300
              "
            />
          </div>

          {/* Botón de Filtros */}
          <button
            className="
              flex h-12 w-14 flex-shrink-0 
              items-center justify-center rounded-3xl 
              bg-white shadow-md
            "
          >
            <FiltersIcon />
          </button>
        </div>
      </div>
      {/* El fondo con patrones de la imagen original sería un div con position absolute y z-index negativo */}
      {/* <div className="absolute inset-0 bg-pattern -z-10 opacity-10"></div> */}
    </header>
  );
}
