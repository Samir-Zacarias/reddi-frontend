import Link from "next/link"; // Importante para la navegación en Next.js

interface NavigationMenuProps {
  myOnClick: () => void;
  isOpen: boolean;
  linksData: Array<{ name: string; href: string }>;
  className?: string;
}

// El myOnClick cierra el menú al hacer click en un enlace solamente
export default function NavigationMenu({
  myOnClick,
  isOpen,
  linksData,
  className,
}: NavigationMenuProps) {
  const menuClasses = `
    fixed top-0 right-0 z-40 h-screen w-80 max-w-full 
    transform transition-transform duration-300 ease-in-out 
    bg-[#202020] text-white shadow-lg
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `;

  return (
    <nav className={`${menuClasses} ${className}`}>
      <ul className="flex flex-col p-8 pt-24 space-y-6">
        {linksData.map(({ name, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-xl hover:text-primary transition-colors"
              onClick={myOnClick}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
