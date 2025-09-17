// components/PromoCard.tsx

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

// Definimos los props. Hacemos algunos opcionales para mayor flexibilidad.
type PromoCardProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  imageUrl: string;
  href: string;
  bgColor: string; // Ej: 'bg-black' o 'bg-yellow-400'
  textColor: string; // Ej: 'text-white' o 'text-gray-900'
};

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  subtitle,
  buttonText,
  imageUrl,
  href,
  bgColor,
  textColor,
}) => {
  // Determina el color del botón basado en el fondo de la tarjeta
  const buttonClasses =
    bgColor.includes("black") || bgColor.includes("slate")
      ? "bg-white text-black"
      : "bg-black text-white";

  return (
    <Link
      href={href}
      className={`
        group relative flex-shrink-0
        w-80 h-32 md:w-80 md:h-44  /* <-- CAMBIO PRINCIPAL AQUÍ */
        overflow-hidden rounded-2xl
        transition-transform duration-300 hover:scale-105
        ${bgColor} ${textColor}
      `}
    >
      {/* Ajustamos el padding para la versión móvil */}
      <div className="flex h-full w-full items-center p-4 py-5 md:p-4 gap-3 md:gap-4">
        {/* Columna de Imagen */}
        <div className="relative h-full w-2/5 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title || "Promoción especial"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg md:rounded-xl" // Bordes un poco más pequeños en móvil
          />
        </div>

        {/* Columna de Texto y Botón */}
        <div className="flex h-full w-3/5 flex-col">
          {title && (
            // Ajustamos el tamaño del título para móvil
            <h3 className="text-base md:text-xl font-extrabold leading-tight">
              {title}
            </h3>
          )}
          {subtitle && (
            // Ajustamos el tamaño del subtítulo y el margen
            <p className="mt-0.5 text-xs md:text-sm">{subtitle}</p>
          )}
          {buttonText && (
            <div
              className={`
                mt-auto flex items-center justify-center gap-1 md:gap-2
                rounded-full px-3 py-1.5 md:px-4 md:py-2 /* <-- Padding del botón ajustado */
                text-xs md:text-sm font-semibold /* <-- Tamaño de texto del botón ajustado */
                self-start ${buttonClasses}
                transition-transform duration-200 group-hover:scale-110
              `}
            >
              <span>{buttonText}</span>
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />{" "}
              {/* Icono más pequeño */}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PromoCard;
