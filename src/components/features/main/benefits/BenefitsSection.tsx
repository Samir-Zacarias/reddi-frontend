// components/BenefitsSection.tsx

import React from "react";
import BenefitItem from "./BenefitItem";

// 1. Datos de los beneficios en un array para mantener el código limpio
const benefitsData = [
  {
    title: "Entregas puntuales al minuto",
    description:
      "Cumplimos con los horarios acordados para que nunca tengas que esperar",
  },
  {
    title: "Productos frescos y de calidad",
    description:
      "Seleccionamos cuidadosamente cada producto para garantizar la máxima calidad",
  },
  {
    title: "Comercios aliados de confianza",
    description: "Trabajamos solo con los mejores establecimientos de la zona",
  },
  {
    title: "Pago seguro y rápido",
    description:
      "Múltiples métodos de pago con la máxima seguridad en cada transacción",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-start">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Beneficios de <span className="text-primary">Reddi</span>
          </h2>
        </div>

        {/* Lista de beneficios */}
        <div className="mt-12 flex flex-col gap-8">
          {/* 2. Mapeamos los datos y renderizamos un BenefitItem por cada uno */}
          {benefitsData.map((benefit) => (
            <BenefitItem
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
