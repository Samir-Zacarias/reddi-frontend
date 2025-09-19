// components/AddressEditForm.tsx
"use client";

import { useState } from "react";
import { AddressData } from "@/src/lib/finalUser/type";

export type NewAddressFormProps = {
  onCancel: () => void;
  onSave: (updatedAddress: Partial<AddressData>) => void;
};

export default function AddressEditForm({ onSave }: NewAddressFormProps) {
  const [formData, setFormData] = useState<AddressData>({
    id: 0,
    address: "",
    label: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col grow">
      <div className="grow">
        {/* Campo: Tipo de lugar */}
        <div className="p-4 font-roboto">
          <h3 className="text-base font-bold mb-4 font-poppins">
            Nueva dirección
          </h3>
          <label
            htmlFor="label"
            className="block text-sm font-semibold text-gray-700 pb-1"
          >
            Tipo de lugar
          </label>
          <select
            id="label"
            name="label"
            value={formData.label}
            onChange={(e) =>
              setFormData({ ...formData, label: e.target.value })
            }
            className="
            block w-full border border-gray-200 rounded-xl
            py-2 px-3 appearance-none
            focus:border-primary focus:ring focus:ring-primary focus:outline-none
          "
          >
            {/* Opciones*/}
            <option>Villa</option>
            <option>Yate</option>
          </select>

          {/* Campo: Instrucciones especiales */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-sm text-gray-700 pt-4 pb-1 font-semibold"
            >
              Instrucciones especiales para la entrega
            </label>
            <textarea
              id="instructions"
              name="instructions"
              rows={4}
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="Ingresa la información"
              className="
            block w-full rounded-md border-gray-300 shadow-sm
            border
            py-2 px-3 resize-none
            focus:border-primary focus:ring focus:ring-primary focus:outline-none
          "
            />
          </div>
        </div>
      </div>

      {/* Botones de Acción */}
      <footer className="p-4 flex-shrink-0">
        <button
          className="
              w-full bg-primary text-white font-medium py-3
              rounded-full text-center
              hover:bg-[#15803d] transition-colors
            "
        >
          Guardar dirección
        </button>
      </footer>
    </form>
  );
}
