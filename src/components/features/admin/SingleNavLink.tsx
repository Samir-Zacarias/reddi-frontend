import SingleNavLinkProps from "./SingleNavLink";
import { NavLink } from "./AdminAside";
import Link from "next/link";

export type SingleNavLinkProps = {
  link: Omit<NavLink, "subLinks">;
  isActive: boolean;
  onClick: () => void;
};

export default function SingleNavLink({
  link,
  isActive,
  onClick,
}: SingleNavLinkProps) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={`flex items-center space-x-3 rounded-lg p-3 text-sm font-medium ${
        isActive
          ? "bg-teal-500 text-white"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <link.icon className="h-5 w-5" />
      <span>{link.name}</span>
    </Link>
  );
}
