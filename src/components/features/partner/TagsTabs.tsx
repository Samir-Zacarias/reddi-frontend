"use client";

import React from "react";

type Tag = {
  value: string;
  label: string;
};

type CategoryTabsProps = {
  tags: Tag[];
  selectedCategoryId: string; // El ID de la categoría actualmente seleccionada
  onSelectCategory: (id: string) => void; // Función para notificar al padre de un cambio
};

export default function CategoryTabs({
  tags,
  selectedCategoryId,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <>
      {tags.map((tag) => {
        const isSelected = tag.value === selectedCategoryId;

        return (
          <button
            key={tag.value}
            onClick={() => onSelectCategory(tag.value)}
            className={`
              px-4 py-1 rounded-full text-sm md:text-base font-medium transition-color duration-200 ease-in-out 
              ${
                isSelected
                  ? "bg-[#CDF7E7] text-primary border border-primary shadow-sm"
                  : "bg-[#F0F2F5B8] text-gray-700 border border-[#D9DCE3] hover:bg-gray-200"
              }
            `}
          >
            {tag.label}
          </button>
        );
      })}
    </>
  );
}
