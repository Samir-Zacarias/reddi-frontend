// components/BenefitItem.tsx

import React from "react";
import { Check } from "lucide-react"; // Usaremos el icono de Check

type BenefitItemProps = {
  title: string;
  description: string;
};

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start gap-4">
      {/* Círculo del icono */}
      <div
        className="
          flex h-12 w-7 flex-shrink-0 items-center 
          justify-center rounded-full bg-primary
        "
      >
        <Check className="h-6 w-6 text-white" />
      </div>

      {/* Contenido de texto */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
