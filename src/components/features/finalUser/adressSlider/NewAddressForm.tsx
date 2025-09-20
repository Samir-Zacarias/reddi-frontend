// components/AddressEditForm.tsx
"use client";

// importar useTransition si decido usarlo
import { useState } from "react";
import { AddressData } from "@/src/lib/finalUser/type";
import ArrowIcon from "@/src/components/icons/ArrowIcon";

export type NewAddressFormProps = {
  onCancel: () => void;
  onSave?: (data: FormData) => Promise<void>;
};

type FormData = Omit<AddressData, "id">;

// agregar el OnSave para cuando tenga la función hecha
export default function AddressEditForm({ onCancel }: NewAddressFormProps) {
  const [formData, setFormData] = useState<FormData>({
    address: "",
    label: "",
  });
  //const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // startTransition(async () => {
    // await onSave(formData);
    // });
  };

  return (
    <>
      <header className="flex items-center p-4 border-gray-00 flex-shrink-0">
        <button
          onClick={onCancel}
          className="p-1 rounded-full hover:bg-black/20"
        >
          <ArrowIcon />
        </button>
        <h2 id="address-panel-title" className="text-xl font-bold px-4 w-full">
          Direcciones
        </h2>
      </header>
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
            block w-full border border-gray-300 rounded-xl
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
            block w-full rounded-xl border-gray-300 shadow-sm
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
              rounded-2xl text-center
              hover:bg-[#15803d] transition-colors
            "
          >
            Guardar dirección
            {/*{isPending? "Guardando..."" : "Guardar dirección"*/}
          </button>
        </footer>
      </form>
    </>
  );
}
