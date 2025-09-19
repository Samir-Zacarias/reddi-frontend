"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Opcional: define un ID específico para el contenedor del portal
const PORTAL_CONTAINER_ID = "portal-root";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Opcional: Asegurarse de que el contenedor exista
    let portalContainer = document.getElementById(PORTAL_CONTAINER_ID);
    if (!portalContainer) {
      portalContainer = document.createElement("div");
      portalContainer.id = PORTAL_CONTAINER_ID;
      document.body.appendChild(portalContainer);
    }

    return () => setMounted(false);
  }, []);

  // No renderizar nada en el servidor o antes de que el componente se monte en el cliente.
  // Después de montar, encuentra el contenedor y crea el portal.
  const container =
    typeof document !== "undefined"
      ? document.getElementById(PORTAL_CONTAINER_ID)
      : null;

  return mounted && container ? createPortal(children, container) : null;
}
