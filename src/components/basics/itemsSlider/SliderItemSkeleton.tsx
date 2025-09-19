// src/components/skeletons/RestaurantCardSkeleton.tsx

/**
 * Un componente esqueleto que imita la estructura y dimensiones de una RestaurantCard.
 * Diseñado para ser usado como un placeholder de carga para prevenir el Content Layout Shift.
 */
export default function RestaurantCardSkeleton() {
  return (
    // CONTENEDOR PRINCIPAL: Replica las clases de tamaño y encogimiento del Link real.
    <div className="flex-shrink-0 w-72 md:w-80">
      <div className="flex flex-col overflow-hidden rounded-xl bg-white">
        {/* Envoltura para la animación de pulso */}
        <div className="animate-pulse">
          {/* 1. Placeholder para la IMAGEN */}
          {/* Replica la altura exacta (h-28) y el fondo redondeado del original. */}
          <div className="h-28 w-full rounded-b-xl bg-skeleton"></div>

          {/* 2. Placeholder para el CONTENIDO DE TEXTO */}
          {/* Se usa padding y space-y para simular el espaciado del contenido real. */}
          <div className="py-3 space-y-1">
            {/* Placeholder para el Nombre (h3) */}
            <div className="h-5 w-3/4 rounded bg-skeleton"></div>

            {/* Placeholder para la Fila de Rating y Tiempo */}
            <div className="h-5 w-5/6 rounded bg-skeleton"></div>

            {/* Placeholder para la Tarifa de Envío (p) */}
            <div className="h-4 w-1/2 rounded bg-skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
