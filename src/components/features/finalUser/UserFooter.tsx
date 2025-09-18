// components/Footer.tsx
"use client";

import { usePathname } from "next/navigation";
import CompassIcon from "@/src/components/icons/CompassIcon";
import GroceryCarIcon from "@/src/components/icons/GroceryCarIcon";
import OrdersIcon from "@/src/components/icons/OrdersIcon";
import HomeIcon from "@/src/components/icons/HomeIcon";
import UserIcon from "@/src/components/icons/UserIcon";
import NavItem from "./NavItem";

// Definimos los elementos de navegación en un array para que sea fácil de mantener
const navItems = [
  { href: "/home", label: "Inicio", icon: HomeIcon },
  { href: "/discover", label: "Descubrir", icon: CompassIcon },
  { href: "/grocery", label: "Grocery", icon: GroceryCarIcon },
  { href: "/orders", label: "Pedidos", icon: OrdersIcon },
  { href: "/profile", label: "Perfil", icon: UserIcon },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white
        border-gray-300 border
        shadow-[0_-5px_15px_-3px_rgba(0,0,0,0.05)]
        pb-safe
      "
    >
      <nav className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </footer>
  );
}
