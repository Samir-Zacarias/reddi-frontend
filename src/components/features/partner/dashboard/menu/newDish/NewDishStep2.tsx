"use client";

import BasicInput from "@/src/components/features/partner/BasicInput";
import Checkbox from "@/src/components/features/partner/CheckBox";
import ArrowLeftIcon from "@/src/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/src/components/icons/ArrowRightIcon";
import { useState } from "react";
import { dishSection, dishOption } from "./NewDishWizard";
import DishIcon from "@/src/components/icons/DishIcon";
import DeletePartnerIcon from "@/src/components/icons/DeletePartnerIcon";

interface NewDishStep2Props {
  sections: dishSection[]; // Recibe el array de secciones
  onSectionsChange: (newSections: dishSection[]) => void; // Notifica al padre de los cambios
  onNextStep: () => void; // Para ir al siguiente paso
  onGoBack: () => void; // Para volver al paso anterior
  onPreview: () => void; // Para vista previa
}

export default function NewDishStep2({
  sections,
  onSectionsChange,
  onNextStep,
  onGoBack,
  onPreview,
}: NewDishStep2Props) {
  const [errors, setErrors] = useState<
    Partial<Record<keyof dishSection | keyof dishOption, boolean>>
  >({});

  // Función para verificar errores en secciones y opciones
  const verifyErrors = (
    newErrors: Partial<Record<keyof dishSection | keyof dishOption, boolean>>
  ) => {
    // La validación ahora debe ocurrir sobre el array `sections` de las props.
    // Ejemplo de validación:
    sections.forEach((section) => {
      // Se verifica si cada sección tiene un nombre
      if (!section.name.trim()) {
        newErrors[`sec-name-${section.id}` as keyof dishSection] = true;
      }
      // Se verifica si cada opción dentro de la sección tiene nombre
      section.options.forEach((option) => {
        if (!option.name.trim()) {
          newErrors[`opt-name-${option.id}` as keyof dishOption] = true;
        }
        // Se verifica si cada opción dentro de la sección tiene precio
        if (!option.extraPrice.trim()) {
          newErrors[`opt-price-${option.id}` as keyof dishOption] = true;
        }
      });
    });
    return newErrors;
  };

  // --- Handlers para las Secciones ---
  const addSection = () => {
    const newSection: dishSection = {
      id: crypto.randomUUID(),
      name: "",
      isRequired: false,
      options: [
        { id: crypto.randomUUID(), name: "", extraPrice: "", image: null },
      ],
    };
    // Calculamos el nuevo array y se lo pasamos al padre
    onSectionsChange([...sections, newSection]);
  };

  const removeSection = (sectionId: string) => {
    const newSections = sections.filter((section) => section.id !== sectionId);
    onSectionsChange(newSections);
  };

  const handleSectionChange = (
    sectionId: string,
    field: "name" | "isRequired",
    value: string | boolean
  ) => {
    const newSections = sections.map((section) =>
      section.id === sectionId ? { ...section, [field]: value } : section
    );
    onSectionsChange(newSections);
  };

  // --- Handlers para las Opciones (dentro de una sección) ---
  const addOption = (sectionId: string) => {
    const newOption: dishOption = {
      id: crypto.randomUUID(),
      name: "",
      extraPrice: "",
      image: null,
    };
    const newSections = sections.map((section) =>
      section.id === sectionId
        ? { ...section, options: [...section.options, newOption] }
        : section
    );
    onSectionsChange(newSections);
  };

  const removeOption = (sectionId: string, optionId: string) => {
    const newSections = sections.map((section) =>
      section.id === sectionId
        ? {
            ...section,
            options: section.options.filter((opt) => opt.id !== optionId),
          }
        : section
    );
    onSectionsChange(newSections);
  };

  const handleOptionChange = (
    sectionId: string,
    optionId: string,
    field: "name" | "extraPrice", // Asegúrate de que los tipos coincidan
    value: string
  ) => {
    const newSections = sections.map((section) => {
      if (section.id === sectionId) {
        const updatedOptions = section.options.map((option) =>
          option.id === optionId ? { ...option, [field]: value } : option
        );
        return { ...section, options: updatedOptions };
      }
      return section;
    });
    onSectionsChange(newSections);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors: Partial<
      Record<keyof dishSection | keyof dishOption, boolean>
    > = {};

    newErrors = verifyErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onNextStep();
  };

  const handlePreview = () => {
    let newErrors: Partial<
      Record<keyof dishSection | keyof dishOption, boolean>
    > = {};

    newErrors = verifyErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onPreview();
  };

  return (
    <>
      {/* --- Cabecera del Grupo de Opciones --- */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg text-gray-900 font-inter">
          Grupos de opciones y extras
        </h2>
        <button
          type="button"
          onClick={addSection}
          className="px-12 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none flex items-center"
        >
          Añadir sección
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl space-y-8">
        {/* --- Lista Dinámica de Secciones --- */}
        <div className="space-y-6">
          {sections.length === 0 ? (
            <span className="text-gray-500 m-6">
              No hay secciones. Añada una con el botón de la esquina.
            </span>
          ) : (
            sections.map((section) => (
              <div
                key={section.id}
                className="border border-[#D9DCE3] rounded-xl p-4 sm:p-6 space-y-4"
              >
                {/* -- Fila de la Sección -- */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full">
                    <BasicInput
                      id={`sec-name-${section.id}`}
                      label="Nombre de la sección"
                      placeholder="Ejm. Salsas, Bebidas frías, Bebidas calientes"
                      value={section.name}
                      onChange={(e) =>
                        handleSectionChange(section.id, "name", e.target.value)
                      }
                      required
                      error={
                        errors[`sec-name-${section.id}` as keyof dishSection]
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-4 pt-0 sm:pt-6 flex-shrink-0">
                    <Checkbox
                      label="Requerido"
                      id={`required-${section.id}`}
                      checked={section.isRequired}
                      onChange={(e) =>
                        handleSectionChange(
                          section.id,
                          "isRequired",
                          e.target.checked
                        )
                      }
                    />
                    <button
                      type="button"
                      onClick={() => removeSection(section.id)}
                      aria-label="Eliminar producto"
                      className="px-6 py-2 text-white bg-[#DB5151] rounded-xl hover:bg-red-700 flex items-center"
                    >
                      <DeletePartnerIcon className="h-4 w-4" />{" "}
                      <span className="mx-2">Eliminar</span>
                    </button>
                  </div>
                </div>

                {/* -- Opciones dentro de la Sección -- */}
                <div className="space-y-3 sm:pl-4">
                  {section.options.map((option) => (
                    <div
                      key={option.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
                    >
                      <button
                        type="button"
                        className="px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none flex items-center whitespace-nowrap"
                      >
                        Subir imagen
                      </button>
                      <div className="grow">
                        <BasicInput
                          id={`opt-name-${option.id}`}
                          label="Nombre de la opción"
                          placeholder="Ejm. Papas fritas, Queso"
                          value={option.name}
                          onChange={(e) =>
                            handleOptionChange(
                              section.id,
                              option.id,
                              "name",
                              e.target.value
                            )
                          }
                          required
                          error={
                            errors[`opt-name-${option.id}` as keyof dishOption]
                          }
                        />
                      </div>
                      <div className="grow sm:w-40">
                        <BasicInput
                          id={`opt-price-${option.id}`}
                          label="Precio"
                          placeholder="0.00"
                          value={option.extraPrice}
                          onChange={(e) =>
                            handleOptionChange(
                              section.id,
                              option.id,
                              "extraPrice",
                              e.target.value
                            )
                          }
                          required
                          error={
                            errors[`opt-price-${option.id}` as keyof dishOption]
                          }
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeOption(section.id, option.id)}
                        aria-label="Eliminar producto"
                        className="p-3 text-white bg-[#DB5151] rounded-xl hover:bg-red-700 flex items-center"
                      >
                        <DeletePartnerIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* -- Botón para añadir opción -- */}
                <button
                  type="button"
                  onClick={() => addOption(section.id)}
                  className="flex items-center text-sm font-medium hover:underline"
                >
                  <DishIcon className="h-4 w-4 mr-1" /> Añadir opción
                </button>
              </div>
            ))
          )}
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
              Subir cambios
              <ArrowRightIcon fill="#ffffff" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
