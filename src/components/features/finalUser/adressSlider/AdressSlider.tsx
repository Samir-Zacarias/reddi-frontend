// components/AddressSlider.tsx
"use client";

import BellIcon from "@/src/components/icons/BellIcon";
import AddressCard from "./AdressCard";
import { AddressSliderProps } from "@/src/lib/finalUser/type";
import { Fragment } from "react";

// Datos de ejemplo
const savedAddresses = [
  {
    id: 1,
    icon: <BellIcon />,
    address: "Muelle 03, 93",
    label: "Yate",
  },
  {
    id: 2,
    icon: <BellIcon />,
    address: "Muelle 03, 93",
    label: "Villa",
  },
];

export default function AddressSlider({ isOpen, onClose }: AddressSliderProps) {
  return (
    // Fragment para agrupar el overlay y el panel
    <Fragment>
      {/* 1. Overlay de fondo */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden="true"
      />

      {/* 2. El Panel Deslizante */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full max-w-md
          bg-white shadow-xl z-50
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="address-panel-title"
      >
        {/* Encabezado */}
        <header className="flex items-center p-4 border-b border-gray-200 flex-shrink-0">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <BellIcon />
          </button>
          <h2 id="address-panel-title" className="text-xl font-bold ml-4">
            Direcciones
          </h2>
        </header>

        {/* Contenido Principal (con scroll) */}
        <main className="flex-grow p-4 overflow-y-auto">
          <h3 className="text-base font-bold text-gray-800 mb-4">
            Direcciones guardadas
          </h3>
          <div className="space-y-3">
            {savedAddresses.map((item) => (
              <AddressCard
                key={item.id}
                icon={item.icon}
                address={item.address}
                label={item.label}
                onEdit={() => alert(`Editando: ${item.label}`)}
              />
            ))}
          </div>
        </main>

        {/* Pie de página (Botón) */}
        <footer className="p-4 border-t border-gray-200 flex-shrink-0">
          <button
            className="
              w-full bg-[#16a34a] text-white font-semibold py-3
              rounded-full text-center
              hover:bg-[#15803d] transition-colors
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16a34a]
            "
          >
            Agregar nueva dirección
          </button>
        </footer>
      </div>
    </Fragment>
  );
}
