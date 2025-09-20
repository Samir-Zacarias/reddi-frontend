"use client";

import Squares2X2Icon from "@/src/components/icons/Squares2X2Icon";
import LogoutAsideIcon from "@/src/components/icons/LogoutAsideIcon";
import CollapsibleNavLink from "./CollapsibleNavLink";
import SingleNavLink from "./SingleNavLink";
import { useState } from "react";
import { usePathname } from "next/navigation";

export type NavLink = {
  name: string;
  href: string;
  icon: React.ElementType;
  subLinks?: Omit<NavLink, "icon" | "subLinks">[];
};

const navigationLinks: NavLink[] = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Squares2X2Icon },
  { name: "Pedidos", href: "/admin/orders", icon: Squares2X2Icon },
  {
    name: "Usuarios",
    href: "#",
    icon: Squares2X2Icon,
    subLinks: [
      { name: "Clientes", href: "/admin/clients" },
      { name: "Aliados", href: "/admin/partners" },
      { name: "Repartidores", href: "/admin/drivers" },
    ],
  },
  { name: "Banner", href: "/admin/banners", icon: Squares2X2Icon },
  { name: "Finanzas", href: "/admin/finances", icon: Squares2X2Icon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(() => {
    const currentLink = navigationLinks.find((link) =>
      link.subLinks?.some((sub) => sub.href === pathname)
    );
    return currentLink?.name || "";
  });

  return (
    <aside className="fixed w-[14rem] h-screen flex-col bg-white pt-[86px] -translate-x-full md:translate-x-0">
      <div className="flex flex-col p-4 h-full justify-between">
        {/* Navegación Principal */}
        <nav className="space-y-2">
          {navigationLinks.map((link) => {
            if (link.subLinks) {
              const isMenuActive = link.subLinks.some(
                (sub) => pathname === sub.href
              );
              return (
                <CollapsibleNavLink
                  key={link.name}
                  link={link}
                  // El menú está abierto si su nombre coincide con el estado O si está activo
                  isOpen={openMenu === link.name || isMenuActive}
                  activeSubLink={pathname} // El sub-enlace activo es simplemente la ruta actual
                  onToggle={() =>
                    setOpenMenu(openMenu === link.name ? "" : link.name)
                  }
                  // onSubLinkClick ya no es necesario, el <Link> se encarga
                />
              );
            }

            return (
              <SingleNavLink
                key={link.name}
                link={link}
                isActive={pathname === link.href}
                onClick={() => setOpenMenu("")}
              />
            );
          })}
        </nav>

        {/* Botón de Logout */}
        <div>
          <button
            className="
              flex w-full items-center rounded-lg 
              bg-gray-50 p-3 text-sm font-medium text-gray-600
              hover:bg-gray-100 hover:text-gray-900
            "
          >
            <LogoutAsideIcon className="h-5 w-5 mx-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
