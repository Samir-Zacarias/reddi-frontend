import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({
  href,
  children,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center transition-colors duration-500 border-mainBorder rounded-xl border group  ${className}`}
    >
      {children}
    </Link>
  );
}
