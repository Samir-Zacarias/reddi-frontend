// src/hooks/useBodyScrollLock.ts
"use client";

import { useEffect } from "react";

export default function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    // Si no está bloqueado, no hace nada
    if (!isLocked) {
      return;
    }

    // Guarda el estilo original del overflow del body
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    // Aplica el bloqueo de scroll
    document.body.style.overflow = "hidden";

    // Función de limpieza: se ejecuta cuando el componente se desmonta
    // o cuando el valor de `isLocked` cambia de `true` a `false`.
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]); // El efecto se vuelve a ejecutar solo si `isLocked` cambia.
}
