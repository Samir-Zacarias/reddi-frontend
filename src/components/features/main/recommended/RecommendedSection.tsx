// components/RecommendedSection.tsx

import React from "react";
import Link from "next/link";
import RestaurantCard, { RestaurantCardProps } from "./RestaurantCard";

// Datos de ejemplo. En una aplicación real, esto vendría de una API.
const recommendedItems: RestaurantCardProps[] = [
  {
    name: "Tacos de pollo y carne",
    imageUrl: "/tacos.png", // Reemplaza con tus imágenes
    rating: 4.8,
    reviewCount: 254,
    deliveryTime: "25-35 min",
    deliveryFee: "$0 tarifa de envío",
    href: "/restaurantes/tacos-el-pastor",
  },
  {
    name: "Carnicería San Juan",
    imageUrl: "/sushi-carne.png", // Reemplaza con tus imágenes
    rating: 4.9,
    reviewCount: 512,
    deliveryTime: "30-40 min",
    deliveryFee: "$0 tarifa de envío",
    href: "/tiendas/carniceria-san-juan",
  },
];

const RecommendedSection: React.FC = () => {
  return (
    <section
      className="w-full py-4 bg-white"
      aria-labelledby="recomendados-titulo"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="px-4 sm:px-6 mb-4">
          <h2
            id="recomendados-titulo"
            className="text-2xl font-extrabold text-gray-900"
          >
            Recomendados para ti
          </h2>
        </div>

        {/* Carrusel de tarjetas */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 sm:px-6">
          {recommendedItems.map((item) => (
            <RestaurantCard key={item.name} {...item} />
          ))}
        </div>

        {/* Enlace "Mostrar todo" */}
        <div className="mt-4 px-4 sm:px-6">
          <Link
            href="/recomendados"
            className="
              text-base font-semibold text-gray-800 
              underline decoration-2 underline-offset-4
              hover:text-teal-600 focus:outline-none focus:ring-2 
              focus:ring-teal-500 focus:ring-offset-2
            "
          >
            Mostrar todo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
