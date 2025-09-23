import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function LinkButton({
  href,
  children,
  className,
  onClick,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-center transition-colors duration-500 border-mainBorder rounded-xl border group  ${className}`}
    >
      {children}
    </Link>
  );
}
