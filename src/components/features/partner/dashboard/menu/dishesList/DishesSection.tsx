"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import DishItem from "./DishItem";
import { DishData } from "@/src/lib/partner/dashboard/type";
import SearchInput from "@/src/components/basics/BasicInput";
import SelectInput from "@/src/components/basics/SelectInput";
import TagsTabs from "@/src/components/features/partner/TagsTabs";
import SearchPartnerIcon from "@/src/components/icons/SearchPartnerIcon";

type DishesListProps = {
  dishes: DishData[];
  categories: { value: string; label: string }[];
  tags: { value: string; label: string }[];
};
export default function DishesSection({
  dishes,
  categories,
  tags,
}: DishesListProps) {
  // En un componente real, aquí tendrías estados para manejar los inputs:
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleDeleteDish = (id: string) => {
    console.log("Eliminando plato con ID:", id);
    // Aquí iría la lógica para mostrar una confirmación y llamar a la API para eliminar.
    // Esto suele ser una Server Action o una llamada a una API Route.
  };

  return (
    <>
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
        <h1 className="font-semibold text-gray-800 font-montserrat">
          Lista de platillos
        </h1>
        {/* Usamos Link para el botón de añadir nuevo producto */}
        <Link
          href="menu/nuevo"
          className="px-8 py-2 text-center text-white bg-primary rounded-xl hover:bg-teal-600 transition-colors font-medium text-sm"
        >
          Añadir Nuevo Menú / Plato
        </Link>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
        <SearchInput
          id="search"
          label="Menú / platos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:col-span-2"
          icon={<SearchPartnerIcon />}
        />
        <SelectInput
          id="category"
          label="Categoría"
          options={categories}
          getOptionValue={(option) => option.value}
          getOptionLabel={(option) => option.label}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <TagsTabs
          tags={tags}
          selectedCategoryId={selectedTag}
          onSelectCategory={setSelectedTag}
        />
      </div>
      {/* Grid de Platos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-4">
        {dishes.map((dish) => (
          <DishItem key={dish.id} dish={dish} onDelete={handleDeleteDish} />
        ))}
      </div>
    </>
  );
}
