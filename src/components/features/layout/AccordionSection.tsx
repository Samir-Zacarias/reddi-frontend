"use client";

import { useState } from "react";
import FooterTitle from "./FooterTitle";
import { ChevronDown } from "lucide-react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function AccordionSection({
  title,
  children,
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left md:pointer-events-none md:py-0"
        aria-expanded={isOpen}
      >
        <FooterTitle>{title}</FooterTitle>
        <ChevronDown className={`md:hidden ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* --- Contenido del Acordeón --- */}
      <div
        className={`
          grid overflow-hidden transition-all duration-300 ease-in-out
          md:grid-rows-[1fr]
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-3 pb-4 md:gap-1 md:p-0 text-mainBorder">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
}
