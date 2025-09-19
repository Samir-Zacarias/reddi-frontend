import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
};

interface NavigationMenuProps {
  isOpen: boolean;
  myOnClick: () => void; // Esta función se usará para cerrar el menú
  linksData: LinkItem[];
}

export default function NavigationMenu({
  isOpen,
  myOnClick,
  linksData,
}: NavigationMenuProps) {
  return (
    // Contenedor principal que actúa como overlay
    <div
      className={`
        fixed inset-0 z-40
        transition-opacity duration-300 ease-in-out
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      {/* 
        RE-AÑADIDO: El Overlay.
        Este div cubre toda la pantalla.
        - `absolute inset-0`: Hace que ocupe todo el espacio de su padre (el contenedor principal).
        - `bg-black bg-opacity-50`: Le da el color negro semi-transparente.
        - `onClick={myOnClick}`: ¡Esta es la clave! Al hacer clic en cualquier parte de este fondo,
          se llamará a la función `myOnClick` (que en el Header es `toggleMenu`), cerrando el menú.
      */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30"
        onClick={myOnClick}
        aria-label="Cerrar menú" // Añadido por accesibilidad
      ></div>
      {/* El panel del menú */}
      <nav
        className={`
          absolute top-14 right-4 px-4 
          origin-top-right transform
          rounded-2xl bg-white  text-gray-800 shadow-xl
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col ">
          {linksData.length > 0 ? (
            linksData.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                // Al hacer clic en un enlace, también cerramos el menú
                onClick={myOnClick}
                className="
                  block rounded-lg px-4 py-1.5 
                  text-center text-lg font-medium 
                  hover:bg-gray-100 active:bg-gray-200
                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No hay enlaces.</p>
          )}
        </div>
      </nav>
    </div>
  );
}
