// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function CheckBoxIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.5625 2.02869L4.5625 11.0287L0.4375 6.90369L1.495 5.84619L4.5625 8.90619L12.505 0.971191L13.5625 2.02869Z"
        fill={fill || "white"}
      />
    </svg>
  );
}
