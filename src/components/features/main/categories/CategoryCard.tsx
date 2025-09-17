import Image from "next/image";
import Link from "next/link";
import React from "react";

// Definimos los props que recibirá cada tarjeta
type CategoryCardProps = {
  name: string;
  imageUrl: string;
  href: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imageUrl,
  href,
}) => {
  return (
    <Link
      href={href}
      className="
        flex flex-col items-center justify-start 
        w-24 flex-shrink-0 gap-2
        transition-transform duration-200 
        hover:scale-105 active:scale-95
      "
    >
      {/* Contenedor de la imagen */}
      <div className="flex h-16 w-16 items-center justify-center">
        <Image
          src={imageUrl}
          alt={`Icono de ${name}`}
          width={64} // 64px
          height={64} // 64px
          className="object-contain" // Asegura que la imagen encaje sin distorsionarse
        />
      </div>

      {/* Nombre de la categoría */}
      <span className="text-sm font-medium text-gray-800 text-center">
        {name}
      </span>
    </Link>
  );
};

export default CategoryCard;
