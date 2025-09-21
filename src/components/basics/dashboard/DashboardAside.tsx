"use client";

import LogoutAsideIcon from "@/src/components/icons/LogoutAsideIcon";
import CollapsibleNavLink from "../../features/admin/CollapsibleNavLink";
import SingleNavLink from "../../features/admin/SingleNavLink";
import { useState } from "react";
import { usePathname } from "next/navigation";

export type NavLink = {
  name: string;
  href: string;
  subLinks?: Omit<NavLink, "subLinks">[];
};

export default function Sidebar({
  navigationLinks,
}: {
  navigationLinks: NavLink[];
}) {
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
