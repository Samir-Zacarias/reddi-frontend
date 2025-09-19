// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function ArrowIcon({ className, fill }: IconProps) {
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
        d="M13.6666 7H3.19995L6.86662 12H4.53328L0.199951 6L4.53328 0H6.86662L3.19995 5H13.6666V7Z"
        fill={fill || "black"}
      />
    </svg>
  );
}
