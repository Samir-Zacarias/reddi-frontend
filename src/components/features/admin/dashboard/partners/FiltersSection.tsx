// app/dashboard/components/FiltersSection.tsx
"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchPartnerIcon from "@/src/components/icons/SearchPartnerIcon";
import BasicInput from "@/src/components/basics/BasicInput";
import SelectInput from "@/src/components/basics/SelectInput";

type FiltersSectionProps = {
  // Puedes pasar las opciones para los selects desde un Server Component
  businessTypes: Array<{ value: string; label: string }>;
  states: Array<{ value: string; label: string }>;
};

export default function FiltersSection({
  businessTypes,
  states,
}: FiltersSectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- ESTADOS LOCALES PARA LOS INPUTS ---
  // Cuando carga verifica los parámetros en la URL para inicializar los datos
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [type, setType] = useState(searchParams.get("type") || "");
  const [state, setState] = useState(searchParams.get("state") || "");

  // --- MANEJADORES DE EVENTOS ---

  const handleFilter = () => {
    // URLSearchParams es una API del navegador muy útil para construir query strings
    const params = new URLSearchParams(searchParams);

    // Actualizamos los parámetros basados en el estado local
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q"); // Elimina el parámetro si el input está vacío
    }

    if (type) {
      params.set("type", type);
    } else {
      params.delete("type");
    }

    if (state) {
      params.set("state", state);
    } else {
      params.delete("state");
    }

    // Navegamos a la nueva URL. Usamos push para que el usuario pueda usar el botón "atrás"
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleClearFilters = () => {
    // 1. Limpiamos el estado local de los inputs
    setQuery("");
    setType("");
    setState("");

    // 2. Navegamos a la URL sin parámetros de filtro
    router.push(pathname, { scroll: false });
  };

  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 font-montserrat">
        Filtros
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
        {/* Input de Búsqueda */}

        <BasicInput
          id="search"
          label="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por ID, cliente, aliado..."
          icon={<SearchPartnerIcon />}
        />

        {/* Select de Tipo de negocio */}
        <SelectInput
          id="business-type"
          options={businessTypes}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.label}
          label="Tipo de negocio"
          placeholder="Seleccione"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        {/* Select de Estados */}
        <SelectInput
          id="business-state"
          options={states}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.label}
          label="Estados"
          placeholder="Seleccione"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      {/* Botones de Acción */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={handleClearFilters}
          className="px-5 py-2.5 text-sm font-medium text-gray-800 bg-white border border-black rounded-xl hover:bg-gray-100 focus:outline-none"
        >
          Limpiar filtros
        </button>
        <button
          onClick={handleFilter}
          className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
