import { ReactNode } from "react";

export type AddressCardProps = {
  icon: ReactNode;
  address: string;
  label: string;
  onEdit: () => void;
};

export default function AddressCard({
  icon,
  address,
  label,
  onEdit,
}: AddressCardProps) {
  return (
    <div
      className="
        flex items-center p-3
        border border-gray-200 rounded-xl
        bg-white font-roboto
      "
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="px-4 flex-grow">
        <p className="font-medium text-sm text-gray-900">{address}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
      <button
        onClick={onEdit}
        className="
          px-4 text-sm font-medium underline text-gray-800
          hover:text-gray-900
          
        "
      >
        Editar
      </button>
    </div>
  );
}
