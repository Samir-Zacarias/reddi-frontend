import React from "react";

interface FooterTitleProps {
  children: React.ReactNode;
}

export default function FooterTitle({ children }: FooterTitleProps) {
  return <h2 className="text-white mb-3">{children}</h2>;
}
