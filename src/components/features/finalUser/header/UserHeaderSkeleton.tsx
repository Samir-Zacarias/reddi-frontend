export default function UserHeaderSkeleton() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        text-white
        rounded-b-3xl shadow-lg
        pt-safe 
        overflow-hidden
        h-[140px] /* ALTURA FIJA: Crucial para evitar que el contenido salte. Ajústala si es necesario. */
      "
    >
      <div className="relative z-10 flex animate-pulse flex-col space-y-4 p-4">
        {/* --- Fila Superior: Simulación de Usuario y Acciones --- */}
        <div className="flex items-end justify-between">
          {/* Lado Izquierdo: Simulación de Información del Usuario */}
          <div className="space-y-1.5">
            {/* Simula el "userName" */}
            <div className="bg-skeleton h-4 w-20 rounded-sm"></div>
            {/* Simula la "address" y el botón chevron */}
            <div className="flex items-center gap-2">
              <div className="h-5 w-40 rounded bg-skeleton"></div>
              <div className="h-6 w-6 rounded-full bg-skeleton"></div>
            </div>
          </div>

          {/* Lado Derecho: Simulación de Iconos de Acción */}
          <div className="flex items-center space-x-4">
            {/* Simula los dos botones de icono (Bell y Cart) */}
            <div className="h-6 w-6 rounded-full bg-skeleton"></div>
            <div className="h-6 w-6 rounded-full bg-skeleton"></div>
          </div>
        </div>

        {/* --- Fila Inferior: Simulación de Búsqueda y Filtros --- */}
        <div className="flex items-center gap-3">
          {/* Simula la Barra de Búsqueda */}
          <div className="h-12 flex-grow rounded-full bg-skeleton"></div>

          {/* Simula el Botón de Filtros (dimensiones exactas) */}
          <div className="h-12 w-14 flex-shrink-0 rounded-3xl bg-skeleton"></div>
        </div>
      </div>
    </header>
  );
}
