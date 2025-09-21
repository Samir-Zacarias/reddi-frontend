// src/components/skeletons/SliderSectionSkeleton.tsx

import SliderItemSkeleton from "./SliderItemSkeleton";

export default function SliderSectionSkeleton() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="sm:px-6 mb-4 animate-pulse">
          {/* Placeholder para el Título */}
          <div className="h-6 w-1/3 bg-skeleton rounded"></div>
        </div>

        {/* Carrusel de tarjetas esqueléticas */}
        <div className="flex gap-4 overflow-hidden sm:px-6">
          {/* Renderizamos varios esqueletos de tarjeta para simular el carrusel */}
          {/* Array.from crea un array de la longitud deseada para el mapeo */}
          {Array.from({ length: 2 }).map((_, index) => (
            <SliderItemSkeleton key={index} />
          ))}
        </div>

        {/* Placeholder para el enlace "Mostrar todo" */}
        <div className="mt-1 sm:px-6 animate-pulse">
          <div className="h-6 w-28 bg-skeleton rounded"></div>
        </div>
      </div>
    </section>
  );
}
