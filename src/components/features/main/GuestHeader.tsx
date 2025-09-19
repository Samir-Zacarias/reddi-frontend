// components/Header.tsx

"use client";

import Badge from "@/src/components/basics/header/Badge";
import Logo from "@/src/components/basics/Logo";
import FiltersIcon from "@/src/components/icons/FiltersIcon";
import SearchIcon from "@/src/components/icons/SearchIcon";
import UserCarIcon from "@/src/components/icons/UserCarIcon";
import BurgerButton from "@/src/components/features/layout/BurgerButton";
import GuestMenu from "@/src/components/features/main/GuestMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const badgeColor = "bg-primary";
const primary = "#00A86B";

export default function GuestHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const showSearchBar = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si el usuario está cerca de la parte superior, siempre muestra la barra
      if (currentScrollY < 10) {
        setIsSearchBarVisible(true);
      }
      // Si el scroll es hacia abajo, oculta la barra
      else if (currentScrollY > lastScrollY) {
        setIsSearchBarVisible(false);
        setIsMenuOpen(isMenuOpen && false);
      }
      // Si el scroll es hacia arriba, muestra la barra
      else {
        setIsSearchBarVisible(true);
        setIsMenuOpen(isMenuOpen && false);
      }

      // Actualiza la última posición del scroll
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen, isClient]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        text-white
        shadow-lg
        pt-safe 
        overflow-hidden
        ${showSearchBar && "rounded-b-xl"}
      `} // INSTALAR EL PLUGIN PARA EL PTSAFE
    >
      <div
        className="
          absolute inset-0
          bg-white
          -z-10
        "
      ></div>
      <div
        className={`flex flex-col p-4 ${isSearchBarVisible ? "space-y-4" : ""}`}
      >
        {/* --- Fila Superior: Usuario y Acciones --- */}
        <div className="flex items-end justify-between">
          {/* Lado Izquierdo: Información del Usuario */}
          <Link href="/">
            <Logo fill={primary} />
          </Link>

          {/* Lado Derecho: Iconos de Acción */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <UserCarIcon fill="#000000" />
              <Badge count={1} color={badgeColor} />
            </button>
            <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        {/* --- Fila Inferior: Búsqueda y Filtros --- */}
        {showSearchBar && (
          <div
            className={`
              flex items-center gap-3
              transition-all duration-500 ease-in-out
              ${
                isSearchBarVisible
                  ? "max-h-20 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-full invisible"
              }
            `}
          >
            {/* Barra de Búsqueda */}
            <div className="relative flex-grow">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon />
              </div>
              <input
                type="search"
                placeholder="Busca 'Refresco'"
                className="
                  w-full rounded-full border-none bg-white 
                  py-3 pl-11 pr-4 
                  text-gray-900 placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-green-300
                "
              />
            </div>
            {/* Botón de Filtros */}
            <button
              className="
                flex h-12 w-14 flex-shrink-0 
                items-center justify-center rounded-3xl 
                bg-white shadow-md
              "
            >
              <FiltersIcon />
            </button>
          </div>
        )}
      </div>
      <GuestMenu
        isOpen={isMenuOpen}
        myOnClick={toggleMenu}
        linksData={[
          { label: "Delivery gratis", href: "/" },
          { label: "Ofertas", href: "/" },
          { label: "Desayuno", href: "/" },
          { label: "Almuerzo", href: "/" },
          { label: "Cena", href: "/" },
        ]}
      />
    </header>
  );
}
