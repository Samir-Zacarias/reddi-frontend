// src/components/preview/ExtraSection.tsx

import { dishSection } from "./NewDishWizard";
import MinusIcon from "@/src/components/icons/MinusIcon";
import ExtraItem from "./ExtraItem";

interface ExtraSectionProps {
  section: dishSection;
}

export default function ExtraSection({ section }: ExtraSectionProps) {
  return (
    <div className="mt-4">
      {/* Encabezado de la Sección */}
      <div className="flex items-center justify-between p-3 bg-[#EFF2F5] rounded-lg">
        <h3 className="font-bold text-gray-800">{section.name}</h3>
        <div className="flex items-center gap-2">
          {section.isRequired && (
            <span className="text-xs text-primary font-roboto">Requerido</span>
          )}
          <button className="bg-[#9BA1AE] rounded-full">
            <MinusIcon />
          </button>
        </div>
      </div>

      {/* Lista de Items */}
      <div className="pl-4 pr-2 divide-y divide-gray-200">
        {section.options.map((item) => (
          <ExtraItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
