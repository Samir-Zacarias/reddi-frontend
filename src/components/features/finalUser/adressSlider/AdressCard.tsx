import { AddressCardProps } from "@/src/lib/finalUser/type";

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
        bg-white
      "
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-4 flex-grow">
        <p className="font-semibold text-sm text-gray-900">{address}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
      <button
        onClick={onEdit}
        className="
          ml-4 text-sm font-medium text-gray-700 underline
          hover:text-gray-900
        "
      >
        Editar
      </button>
    </div>
  );
}
