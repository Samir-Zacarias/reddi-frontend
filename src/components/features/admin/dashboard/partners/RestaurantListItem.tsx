import React from "react";
import Image from "next/image";
import EyeLoginIcon from "@/src/components/icons/EyeLoginIcon";
import EditPartnerIcon from "@/src/components/icons/EditPartnertIcon";
import DeletePartnerIcon from "@/src/components/icons/DeletePartnerIcon";
import { Restaurant } from "@/src/lib/admin/type";

// Componente para el tag de estado
const StatusBadge = ({ state }: { state: Restaurant["state"] }) => {
  const isActive = state === "open";

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${
        isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isActive ? "Activo" : "Inactivo"}
    </span>
  );
};

interface UserListItemProps {
  restaurant: Restaurant;
}

export default function UserListItem({ restaurant }: UserListItemProps) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {restaurant.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-8 w-8 relative">
            {/* Placeholder para la imagen */}
            <Image
              className="h-8 w-8 rounded-full"
              src="/"
              fill={true}
              alt={`${restaurant.name} logo`}
            />
          </div>
          <div className="ml-4">{restaurant.name}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {restaurant.nit}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {restaurant.address}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {restaurant.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {restaurant.totalOrders}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <StatusBadge state={restaurant.state} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-4 text-gray-500">
          <button className="hover:text-blue-600" aria-label="Visualizar">
            <EyeLoginIcon fill="#6A6C71" />
          </button>
          <button className="hover:text-yellow-600" aria-label="Editar">
            <EditPartnerIcon fill="#6A6C71" />
          </button>
          <button className="hover:text-red-600" aria-label="Eliminar">
            <DeletePartnerIcon fill="#6A6C71" />
          </button>
        </div>
      </td>
    </tr>
  );
}
