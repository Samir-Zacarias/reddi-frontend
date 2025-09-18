// components/CategoryCard.tsx (Versión Modificada)

import Image from "next/image";
import Link from "next/link";
import React from "react";

// 1. Añadimos la prop `size` que puede ser 'small' o 'large'
type CategoryCardProps = {
  name: string;
  imageUrl: string;
  href: string;
  size?: "small" | "large"; // Hacemos que sea opcional, con 'small' por defecto
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imageUrl,
  href,
  size = "small", // 2. Asignamos 'small' como valor por defecto
}) => {
  // 3. Definimos los estilos que cambian según el tamaño
  const isLarge = size === "large";

  // Clases dinámicas
  const containerClasses = isLarge
    ? "w-full p-4 justify-between" // Más grande, con padding y espacio entre elementos
    : "w-24 flex-shrink-0 gap-2 justify-start"; // El estilo original para el slider

  const imageContainerClasses = isLarge
    ? "w-full h-24" // Contenedor de imagen más alto
    : "h-16 w-16"; // El original

  const imageSize = isLarge ? 96 : 64; // Tamaño de la imagen en píxeles (96px vs 64px)

  const textSize = isLarge
    ? "text-base font-bold" // Texto más grande y en negrita
    : "text-sm font-medium"; // El original

  return (
    <Link
      href={href}
      className={`
        flex flex-col items-center 
        transition-transform duration-200 
        hover:scale-105 active:scale-95 bg-[#f3f3f3] rounded-2xl
        ${containerClasses} 
      `}
    >
      {/* Contenedor de la imagen */}
      <div
        className={`flex items-center justify-center ${imageContainerClasses}`}
      >
        <Image
          src={imageUrl}
          alt={`Icono de ${name}`}
          width={imageSize}
          height={imageSize}
          className="object-contain"
        />
      </div>

      {/* Nombre de la categoría */}
      <span className={`text-gray-800 text-center ${textSize}`}>{name}</span>
    </Link>
  );
};

export default CategoryCard;
