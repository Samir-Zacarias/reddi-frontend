"use client";

import BasicInput from "@/src/components/basics/BasicInput";
import Checkbox from "@/src/components/features/partner/CheckBox";
import FileUploadZone from "@/src/components/features/partner/FileUploadZone";
import SelectInput from "@/src/components/basics/SelectInput";
import TextArea from "@/src/components/features/partner/TextArea";
import ArrowLeftIcon from "@/src/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/src/components/icons/ArrowRightIcon";
import InputNotice from "@/src/components/basics/InputNotice";
import { IDishFormState } from "./NewDishWizard";
import { useState, useRef } from "react";
import { isFieldInvalid } from "@/src/lib/partner/utils";

const categoryOptions = [
  { id: "entrantes", name: "Entrantes" },
  { id: "plato-fuerte", name: "Plato Fuerte" },
  { id: "postres", name: "Postres" },
  { id: "bebidas", name: "Bebidas" },
];

interface NewDishStep1Props {
  formData: IDishFormState;
  requiredFields: (keyof IDishFormState)[];
  updateFormData: (newData: Partial<IDishFormState>) => void;
  onGoBack: () => void;
  onNextStep: () => void;
  onPreview: () => void;
}

export default function NewDishStep1({
  formData,
  requiredFields,
  onPreview,
  updateFormData,
  onGoBack,
  onNextStep,
}: NewDishStep1Props) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof IDishFormState, boolean>>
  >({});
  const formRef = useRef<HTMLFormElement>(null);
  const fileUploadRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });

    if (errors[name as keyof IDishFormState]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name as keyof IDishFormState];
        return newErrors;
      });
    }
  };

  const handleFileChange = (file: File | null) => {
    const fieldName: keyof IDishFormState = "image";

    updateFormData({ [fieldName]: file });

    // Limpia el error para el campo de la imagen
    if (errors[fieldName]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  // Handler específico para checkboxes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData({ [name]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof IDishFormState, boolean>> = {};
    // Validamos cada campo requerido
    requiredFields.forEach((field) => {
      if (isFieldInvalid(formData[field])) {
        newErrors[field] = true;
      }
    });

    // ACTUALIZAMOS el estado de errores si encontramos alguno
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0] as keyof IDishFormState;
      if (firstErrorField === "image") {
        fileUploadRef.current?.focus();
      } else {
        const elementToFocus = formRef.current?.querySelector(
          `[name="${firstErrorField}"]`
        ) as HTMLElement;
        elementToFocus?.focus();
      }

      return;
    }

    // Si todo es válido, continuamos
    setErrors({}); // Limpiamos cualquier error residual
    onNextStep();
  };

  const handlePreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof IDishFormState, boolean>> = {};
    // Validamos cada campo requerido
    requiredFields.forEach((field) => {
      if (isFieldInvalid(formData[field])) {
        newErrors[field] = true;
      }
    });

    // ACTUALIZAMOS el estado de errores si encontramos alguno
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0] as keyof IDishFormState;
      if (firstErrorField === "image") {
        fileUploadRef.current?.focus();
      } else {
        const elementToFocus = formRef.current?.querySelector(
          `[name="${firstErrorField}"]`
        ) as HTMLElement;
        elementToFocus?.focus();
      }

      return;
    }

    // Si todo es válido, continuamos
    setErrors({}); // Limpiamos cualquier error residual
    onPreview();
  };

  return (
    <>
      <h2 className="text-lg text-gray-900 mb-4 font-inter">
        Información Básica
      </h2>
      <form onSubmit={handleSubmit} ref={formRef} noValidate>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Columna Izquierda: Foto */}
          <div className="lg:col-span-2">
            <FileUploadZone
              onFileChange={handleFileChange}
              value={formData.image}
              ref={fileUploadRef}
              required
            />
            {errors.image && <InputNotice variant="error" />}
          </div>

          {/* Columna Derecha: Inputs */}
          <div className="lg:col-span-2 space-y-6">
            <BasicInput
              id="dishName"
              label="Nombre del plato"
              placeholder="Ingresar la información"
              value={formData.dishName}
              onChange={handleChange}
              required
              error={errors.dishName}
            />

            <BasicInput
              id="basePrice"
              label="Precio base (USD)"
              placeholder="Ingresar la información"
              value={formData.basePrice}
              onChange={handleChange}
              required
              error={errors.basePrice}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BasicInput
                id="previousPrice"
                label="Precio anterior (opcional)"
                placeholder="Ingresar la información"
                value={formData.previousPrice}
                onChange={handleChange}
              />
              <BasicInput
                id="discount"
                label="Descuento %"
                placeholder="Ingresar la información"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BasicInput
                id="unit"
                label="Unidad"
                placeholder="/u"
                value={formData.unit}
                onChange={handleChange}
                required
                error={errors.unit}
              />

              <BasicInput
                id="estimatedTime"
                label="Tiempo estimado"
                placeholder="Ejm. 25-35 min"
                value={formData.estimatedTime}
                onChange={handleChange}
                required
                error={errors.estimatedTime}
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
                required
                error={errors.description}
              />
            </div>
            <div>
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
                  required
                  error={errors.category}
                />
              </div>
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
            onClick={onGoBack}
          >
            <ArrowLeftIcon />
            Volver
          </button>

          <div className="flex flex-col sm:flex-row items-center space-x-3">
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none"
              onClick={handlePreview}
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
