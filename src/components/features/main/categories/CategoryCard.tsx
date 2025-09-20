import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryCardProps = {
  name: string;
  imageUrl: string;
  href: string;
  size?: "small" | "large";
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imageUrl,
  href,
  size = "small",
}) => {
  const isLarge = size === "large";

  // Clases dinámicas
  const containerClasses = isLarge
    ? "w-full p-4 justify-between"
    : "w-24 flex-shrink-0 gap-2 justify-start";

  const imageContainerClasses = isLarge ? "w-full h-24" : "h-16 w-16";

  const imageSize = isLarge ? 96 : 64;

  const textSize = isLarge ? "text-base font-bold" : "text-sm font-medium";

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
