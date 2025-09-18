// components/HowItWorksSection.tsx

import React from "react";
import HowItWorksStepCard from "./HowItWorksStepCard";
import SearchIcon from "@/src/components/icons/SearchIcon";
import ClockIcon from "@/src/components/icons/ClockIcon";
import AnchorIcon from "@/src/components/icons/AnchorIcon";

// 1. Definimos los datos para cada paso en un array
const steps = [
  {
    icon: SearchIcon,
    title: "Elige lo que necesitas",
    description:
      "Navega por nuestras categorías y selecciona los productos que deseas",
  },
  {
    icon: ClockIcon,
    title: "Programa la entrega exacta",
    description:
      "Selecciona la hora y ubicación exacta donde quieres recibir tu pedido",
  },
  {
    icon: AnchorIcon,
    title: "Recíbelo en tu villa o yate",
    description:
      "Nuestro equipo te entrega todo directamente donde te encuentres",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Título y Subtítulo de la sección */}
        <h2 className="text-3xl font-semibold text-gray-900">Cómo funciona</h2>
        <p className="mt-4 text-lg font-roboto text-gray-600">
          Tres simples pasos para recibir todo lo que necesitas
        </p>
      </div>

      {/* Contenedor de las tarjetas */}
      <div
        className="
          mt-4 max-w-lg mx-auto grid gap-6 
          lg:max-w-none lg:grid-cols-3
        "
      >
        {/* 2. Mapeamos los datos y renderizamos cada tarjeta */}
        {steps.map((step) => (
          <HowItWorksStepCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
