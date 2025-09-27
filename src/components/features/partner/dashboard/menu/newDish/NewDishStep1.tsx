"use client";

import FooterButtons from "@/src/components/basics/FooterButtons";
import BasicInput from "@/src/components/basics/BasicInput";
import Checkbox from "@/src/components/basics/CheckBox";
import FileUploadZone from "@/src/components/basics/FileUploadZone";
import SelectInput from "@/src/components/basics/SelectInput";
import TextArea from "@/src/components/features/partner/TextArea";
import InputNotice from "@/src/components/basics/InputNotice";
import { IDishFormState } from "./NewDishWizard";
import { useState, useRef } from "react";
import { isFieldInvalid } from "@/src/lib/partner/utils";
import { dishesTags } from "@/src/lib/type";

const POSITIVE_NUMBER_REGEX = /^(0|[1-9]\d*)(\.\d+)?$/;
const ESTIMATED_TIME_REGEX = /^\d{1,2}-\d{1,2}?min$/;
const LIMIT_DESCRIPTION_LENGTH = 250;

const mustBeNumber: (keyof IDishFormState)[] = [
  "basePrice",
  "previousPrice",
  "discount",
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
    Partial<Record<keyof IDishFormState, string>>
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

    // Limpieza de errores para el campo modificado
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

  const verifyErrors = (
    newErrors: Partial<Record<keyof IDishFormState, string>>
  ) => {
    requiredFields.forEach((field) => {
      if (isFieldInvalid(formData[field])) {
        newErrors[field] = "Este campo es obligatorio";
      }
    });
    mustBeNumber.forEach((field) => {
      if (
        formData[field] &&
        !POSITIVE_NUMBER_REGEX.test(formData[field] as string)
      ) {
        newErrors[field] = "Solo se permiten números positivos";
      }
    });
    if (
      formData.estimatedTime &&
      !ESTIMATED_TIME_REGEX.test(formData.estimatedTime)
    ) {
      newErrors.estimatedTime = "Siga el formato XX-XXmin, ejemplo: 10-20min";
    }
    if (
      formData.description &&
      formData.description.length > LIMIT_DESCRIPTION_LENGTH
    ) {
      newErrors.description = `La descripción no puede exceder los ${LIMIT_DESCRIPTION_LENGTH} carácteres`;
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: Partial<Record<keyof IDishFormState, string>> = {};
    newErrors = verifyErrors(newErrors);

    // ACTUALIZAMOS el estado de errores si encontramos alguno
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0] as keyof IDishFormState;
      // Se hace focus al primer campo con error
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

  const handlePreview = () => {
    let newErrors: Partial<Record<keyof IDishFormState, string>> = {};
    newErrors = verifyErrors(newErrors);

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
            {errors.image && <InputNotice variant="error" msg={errors.image} />}
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
                error={errors.previousPrice}
              />
              <BasicInput
                id="discount"
                label="Descuento %"
                placeholder="Ingresar la información"
                value={formData.discount}
                onChange={handleChange}
                error={errors.discount}
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
                placeholder={`Ingrese la información, máximo ${LIMIT_DESCRIPTION_LENGTH} carácteres`}
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
                  options={dishesTags}
                  value={formData.category}
                  onChange={handleChange}
                  getOptionValue={(option) => option.value}
                  getOptionLabel={(option) => option.label}
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
        <FooterButtons
          onGoBack={onGoBack}
          onPreview={handlePreview}
          onSaveAndExit={() => {}}
          onSubmit={handleSubmit}
        />
      </form>
    </>
  );
}
