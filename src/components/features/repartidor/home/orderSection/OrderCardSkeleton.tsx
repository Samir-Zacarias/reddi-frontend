export default function OrderCardSkeleton() {
  return (
    // Replicamos el contenedor principal de la tarjeta original
    <div className="bg-white rounded-2xl p-5 w-full max-w-sm border border-gray-200 shadow-sm mx-auto">
      {/* Usamos un div contenedor para la animación para que no afecte al borde o sombra */}
      <div className="animate-pulse">
        {/* Header Skeleton */}
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-3 w-2/3">
            {/* Logo Placeholder */}
            <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
            {/* Text Lines Placeholder */}
            <div className="flex-grow space-y-2">
              <div className="h-5 bg-gray-300 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
            </div>
          </div>
          {/* Status Badge Placeholder */}
          <div className="h-6 w-20 bg-gray-300 rounded-full flex-shrink-0"></div>
        </div>

        {/* Body Skeleton */}
        <div className="flex flex-col gap-3 mb-5">
          {/* Info Row 1 */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gray-300 rounded-md flex-shrink-0"></div>
            <div className="h-4 bg-gray-300 rounded-md w-4/5"></div>
          </div>
          {/* Info Row 2 */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gray-300 rounded-md flex-shrink-0"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
          </div>
        </div>

        {/* Footer Skeleton */}
        <div>
          {/* Button Placeholder */}
          <div className="w-full h-12 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
