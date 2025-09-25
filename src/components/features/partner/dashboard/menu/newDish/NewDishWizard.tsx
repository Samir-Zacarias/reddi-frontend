"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isSomeFieldsMissing } from "@/src/lib/partner/utils";
import NewDishStep1 from "./NewDishStep1";
import NewDishStep2 from "./NewDishStep2";
import PreviewPage from "./PreviewPage";

const actualUrl = "/aliado/dashboard/menu/nuevo";

/*const categoryOptions = [
  { id: "entrantes", name: "Entrantes" },
  { id: "plato-fuerte", name: "Plato Fuerte" },
  { id: "postres", name: "Postres" },
  { id: "bebidas", name: "Bebidas" },
];*/

export type dishOption = {
  id: string;
  name: string;
  extraPrice: string;
  image: File | null;
};

export type dishSection = {
  id: string;
  name: string;
  isRequired: boolean;
  options: dishOption[];
};

export interface IDishFormState {
  image: File | null;
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
  dishSections: dishSection[];
}

const requiredFieldsStep1: (keyof IDishFormState)[] = [
  "image",
  "dishName",
  "basePrice",
  "unit",
  "estimatedTime",
  "description",
  "category",
];

export default function RegisterWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fallbackUrl = "/aliado/dashboard/menu";
  const currentStep = searchParams.get("step");

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
    image: null,
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
    dishSections: [],
  });

  // Maneja los cambios en NewDishStep2
  const handleSectionsChange = (newSections: dishSection[]) => {
    setFormData((prev) => ({
      ...prev,
      dishSections: newSections,
    }));
  };

  // Actualiza cualquier campo del formulario
  const updateFormData = (newData: Partial<IDishFormState>) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  // Función para el botón siguiente en el Step1
  const handleNextStep1 = () => {
    router.push(`${actualUrl}?step=2`);
  };

  const handleNextStep2 = () => {
    // Esta función será un action para enviar el formulario, se hará en un server component que verificará
    // todos los datos y después los enviará al backend o avisará al usuario que algo está mal.
    window.alert(
      "No implementado aún, buscar handleNextStep2 en NewDishWizard.tsx"
    );
  };

  // Efecto para validar el paso actual y los campos requeridos
  useEffect(() => {
    const validSteps = ["1", "2", "preview"];
    const requiredFieldsStep1: (keyof IDishFormState)[] = [
      "image",
      "dishName",
      "basePrice",
      "unit",
      "estimatedTime",
      "description",
      "category",
    ];

    // Verifica que se esté en un paso válido
    if (!validSteps.includes(currentStep || "")) {
      router.replace(`${actualUrl}?step=1`);
      return;
    }
    // Si se intenta acceder al paso 2 o a la vista previa sin haber completado el paso 1 redirige al paso 1
    if (
      (currentStep === "2" || currentStep === "preview") &&
      isSomeFieldsMissing(requiredFieldsStep1, formData)
    ) {
      router.replace(`${actualUrl}?step=1`);
      return;
    }
  }, [currentStep, router, formData]);

  // Guardias para renderizar el paso correcto o nada
  if (!["1", "2", "preview"].includes(currentStep || "")) {
    return null;
  }

  if (
    (currentStep === "2" || currentStep === "preview") &&
    isSomeFieldsMissing(requiredFieldsStep1, formData)
  ) {
    return null;
  }

  switch (currentStep) {
    case "1":
      return (
        <NewDishStep1
          onPreview={() => router.push(`${actualUrl}?step=preview`)}
          onGoBack={handleGoBackSafely}
          formData={formData}
          requiredFields={requiredFieldsStep1}
          updateFormData={updateFormData}
          onNextStep={handleNextStep1}
        />
      );
    case "2":
      return (
        <NewDishStep2
          onPreview={() => router.push(`${actualUrl}?step=preview`)}
          onGoBack={() => router.push(`${actualUrl}?step=1`)}
          sections={formData.dishSections}
          onSectionsChange={handleSectionsChange}
          onNextStep={handleNextStep2}
        />
      );
    case "preview":
      return <PreviewPage formData={formData} />;
    default:
      return null;
  }
}
