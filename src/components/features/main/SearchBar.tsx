// components/SearchBar.tsx

import React from "react";
import SearchIcon from "../../icons/SearchIcon";
import FiltersIcon from "../../icons/FiltersIcon";

// Definimos los props que nuestro componente aceptará
type SearchBarProps = {
  placeholder?: string;
  onFilterClick?: () => void;
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Busca 'Refresco'", // Placeholder por defecto como en la imagen
  onFilterClick,
  className = "",
}) => {
  return (
    <div className={`relative flex w-full items-center ${className}`}>
      {/* Contenedor del campo de búsqueda y los iconos */}
      <div className="relative w-full">
        {/* Icono de Lupa (Search) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <SearchIcon />
        </div>

        {/* Campo de texto (input) */}
        <input
          type="text"
          placeholder={placeholder}
          className="
            w-full rounded-full border-none bg-gray-100 
            py-3 pl-11 pr-12 text-gray-800 
            placeholder:text-gray-500 
            focus:outline-none focus:ring-2 focus:ring-teal-400
          "
        />

        {/* Icono de Filtros (Sliders) */}
        <button
          type="button"
          onClick={onFilterClick}
          className="
            absolute inset-y-0 right-0 flex items-center pr-4 
            text-teal-500 transition-transform duration-200 
            hover:scale-110 focus:outline-none
          "
          aria-label="Abrir filtros de búsqueda"
        >
          <FiltersIcon />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
