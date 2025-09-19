// components/AddressSlider.tsx
"use client";

import ArrowIcon from "@/src/components/icons/ArrowIcon";
import BoatIcon from "@/src/components/icons/BoatIcon";
import VillageIcon from "@/src/components/icons/VillageIcon";
import AddressCard from "./AddressCard";
import Portal from "@/src/components/basics/Portal";
import useBodyScrollLock from "@/src/lib/hooks/useScrollBodyLock";
import { useState } from "react";
import NewAddressForm from "./NewAddressForm";
import { AddressData } from "@/src/lib/finalUser/type";

export type AddressSliderProps = {
  isOpen: boolean;
  onClose: () => void;
  data: AddressData[];
};

export default function AddressSlider({
  isOpen,
  onClose,
  data,
}: AddressSliderProps) {
  useBodyScrollLock(isOpen);

  const [addingAddress, setAddingAddress] = useState(false);

  const handleNewAddress = () => {
    setAddingAddress(!addingAddress);
  };

  return (
    <Portal>
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
        <header className="flex items-center p-4 border-gray-200 flex-shrink-0">
          <button
            onClick={addingAddress ? handleNewAddress : onClose}
            className="p-1 rounded-full hover:bg-black/20"
          >
            <ArrowIcon />
          </button>
          <h2
            id="address-panel-title"
            className="text-xl font-bold px-4 w-full"
          >
            Direcciones
          </h2>
        </header>

        {addingAddress ? (
          <NewAddressForm
            onCancel={() => {
              console.log("Cancelado");
            }}
            onSave={() => {
              console.log("Guardado");
            }}
          />
        ) : (
          <>
            <main className="flex-grow p-4 overflow-y-auto">
              <h3 className="text-base font-bold mb-4">
                {addingAddress ? "Nueva dirección" : "Direcciones guardadas"}
              </h3>
              <div className="space-y-4">
                {data.map((item) => (
                  <AddressCard
                    key={item.id}
                    icon={
                      item.label === "Yate" ? <BoatIcon /> : <VillageIcon />
                    }
                    address={item.address}
                    label={item.label}
                    onEdit={() => alert(`Editando: ${item.label}`)}
                  />
                ))}
              </div>
            </main>

            <footer className="p-4 flex-shrink-0">
              <button
                className="
              w-full bg-primary text-white font-medium py-3
              rounded-full text-center
              hover:bg-[#15803d] transition-colors
            "
                onClick={handleNewAddress}
              >
                Agregar nueva dirección
              </button>
            </footer>
          </>
        )}
      </div>
    </Portal>
  );
}
