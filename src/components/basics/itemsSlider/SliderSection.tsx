// components/RecommendedSection.tsx

import React from "react";
import Link from "next/link";
import RestaurantCard from "./SliderItem";
import { SliderCardProps } from "@/src/lib/basics/type";

export default function SliderSection({
  cards,
  title,
  href,
}: {
  cards: SliderCardProps[];
  title: string;
  href: string;
}) {
  return (
    <section className="w-full py-4 bg-white" aria-labelledby={title}>
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="px-4 sm:px-6 mb-4">
          <h2 id={title} className="text-2xl font-bold text-gray-900">
            {title}
          </h2>
        </div>

        {/* Carrusel de tarjetas */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 sm:px-6">
          {cards.map((item) => (
            <RestaurantCard key={item.name} {...item} />
          ))}
        </div>

        {/* Enlace "Mostrar todo" */}
        <div className="mt-1 px-4 sm:px-6">
          <Link
            href={href}
            className="
              font-inter font-medium 
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
}
