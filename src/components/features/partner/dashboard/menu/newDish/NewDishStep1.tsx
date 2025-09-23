"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BasicInput from "@/src/components/features/partner/BasicInput";
import Checkbox from "@/src/components/features/partner/CheckBox";
import FileUploadZone from "@/src/components/features/partner/FileUploadZone";
import SelectInput from "@/src/components/features/partner/SelectInput";
import TextArea from "@/src/components/features/partner/TextArea";
import ArrowLeftIcon from "@/src/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/src/components/icons/ArrowRightIcon";

const categoryOptions = [
  { id: "entrantes", name: "Entrantes" },
  { id: "plato-fuerte", name: "Plato Fuerte" },
  { id: "postres", name: "Postres" },
  { id: "bebidas", name: "Bebidas" },
];

interface IDishFormState {
  dishName: string;
  basePrice: string;
  previousPrice: string;
  discount: string;
  unit: string;
  estimatedTime: string;
  description: string;
  category: string;
  isAvailable: boolean;
  taxIncluded: boolean;
}

export default function NewDishStep({}) {
  const router = useRouter();
  const fallbackUrl = "/aliado/dashboard/productos";

  const handleGoBackSafely = () => {
    // document.referrer contiene la URL de la página que enlazó a la actual.
    // window.location.origin contiene el dominio actual (ej: "https://misitio.com").

    // Comprobamos si hay un referrer y si pertenece al mismo dominio que la app.
    if (
      document.referrer &&
      document.referrer.startsWith(window.location.origin)
    ) {
      // Si es seguro, simplemente volvemos atrás.
      router.back();
    } else {
      // Si no es seguro (o no hay referrer), vamos a la URL por defecto.
      router.push(fallbackUrl);
    }
  };

  const [formData, setFormData] = useState<IDishFormState>({
    dishName: "",
    basePrice: "",
    previousPrice: "",
    discount: "",
    unit: "",
    estimatedTime: "",
    description: "",
    category: "",
    isAvailable: true,
    taxIncluded: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler específico para checkboxes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Columna Izquierda: Foto */}
          <div className="lg:col-span-2">
            <FileUploadZone />
          </div>

          {/* Columna Derecha: Inputs */}
          <div className="lg:col-span-2 space-y-6">
            <BasicInput
              id="dishName"
              name="dishName"
              label="Nombre del plato"
              placeholder="Ingresar la información"
              value={formData.dishName}
              onChange={handleChange}
            />
            <BasicInput
              id="basePrice"
              name="basePrice"
              label="Precio base (USD)"
              placeholder="Ingresar la información"
              value={formData.basePrice}
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BasicInput
                id="previousPrice"
                name="previousPrice"
                label="Precio anterior (opcional)"
                placeholder="Ingresar la información"
                value={formData.previousPrice}
                onChange={handleChange}
              />
              <BasicInput
                id="discount"
                name="discount"
                label="Descuento %"
                placeholder="Ingresar la información"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BasicInput
                id="unit"
                name="unit"
                label="Unidad"
                placeholder="/u"
                value={formData.unit}
                onChange={handleChange}
              />
              <BasicInput
                id="estimatedTime"
                name="estimatedTime"
                label="Tiempo estimado"
                placeholder="Ejm. 25-35 min"
                value={formData.estimatedTime}
                onChange={handleChange}
              />
            </div>

            <div>
              <TextArea
                id="description"
                name="description"
                label="Descripción"
                placeholder="Ingresa la información"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <SelectInput
                id="category"
                name="category"
                label="Categorías"
                placeholder="Seleccione"
                options={categoryOptions}
                value={formData.category}
                onChange={handleChange}
                getOptionValue={(option) => option.id}
                getOptionLabel={(option) => option.name}
              />
            </div>

            <div className="flex items-center space-x-6">
              <Checkbox
                id="isAvailable"
                label="Disponible"
                checked={formData.isAvailable}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                id="taxIncluded"
                label="Impuestos Incluidos"
                checked={formData.taxIncluded}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center justify-between mt-12 border-t pt-6">
          <button
            type="button"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
            onClick={handleGoBackSafely}
          >
            <ArrowLeftIcon />
            Volver
          </button>

          <div className="flex flex-col sm:flex-row items-center space-x-3">
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none"
            >
              Vista previa
            </button>
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 focus:outline-none"
            >
              Guardar y salir
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none flex items-center"
            >
              Siguiente
              <ArrowRightIcon fill="#ffffff" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
