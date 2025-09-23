import React from "react";

export default function StatCardSkeleton() {
  return (
    // Contenedor principal de la tarjeta
    <div
      className="bg-white rounded-2xl p-4 shadow-sm flex items-center space-x-4
                     animate-pulse"
    >
      <div className="bg-skeleton rounded-full h-14 w-14"></div>
      <div className="space-y-1">
        <div className="bg-skeleton h-4 w-12 rounded-md"></div>
        <div className="bg-skeleton h-6 w-32 rounded-md"></div>
      </div>
    </div>
  );
}
