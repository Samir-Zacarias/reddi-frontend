// src/components/preview/ExtraItem.tsx

import Image from "next/image";
import { dishOption } from "./NewDishWizard";
import PlusIcon from "@/src/components/icons/PlusIcon";
import MinusIcon from "@/src/components/icons/MinusIcon";

interface ExtraItemProps {
  item: dishOption;
}

export default function ExtraItem({ item }: ExtraItemProps) {
  const imageUrl = item.image ? URL.createObjectURL(item.image) : null;

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={item.name}
            width={32}
            height={32}
            className="object-contain"
          />
        ) : (
          <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Img</span>
          </div>
        )}
        <div>
          <p className="text-sm text-gray-800 font-roboto">{item.name}</p>
          {item.extraPrice && (
            <p className="text-xs text-gray-500">+${item.extraPrice}</p>
          )}
        </div>
      </div>
      {/* Renderizado condicional del control */}
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center w-6 h-6 bg-primary rounded-full hover:bg-green-700">
          <MinusIcon />
        </button>
        <span className="font-medium text-gray-800 w-4 text-center">1</span>
        <button className="flex items-center justify-center w-6 h-6 bg-primary rounded-full hover:bg-green-700">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
