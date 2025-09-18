// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function GroceryCarIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.51 3.33008H8.49C6 3.33008 5.45 4.57008 5.13 6.09008L4 11.5001H20L18.87 6.09008C18.55 4.57008 18 3.33008 15.51 3.33008Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M21.99 20.32C22.1 21.49 21.16 22.5 19.96 22.5H18.08C17 22.5 16.85 22.04 16.66 21.47L16.46 20.87C16.18 20.05 16 19.5 14.56 19.5H9.43998C7.99998 19.5 7.78998 20.12 7.53998 20.87L7.33998 21.47C7.14998 22.04 6.99998 22.5 5.91998 22.5H4.03998C2.83998 22.5 1.89998 21.49 2.00998 20.32L2.56998 14.23C2.70998 12.73 2.99998 11.5 5.61998 11.5H18.38C21 11.5 21.29 12.73 21.43 14.23L21.99 20.32Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M4 8.5H3"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M21 8.5H20"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M12 3.5V5.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M10.5 5.5H13.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M6 15.5H9"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M15 15.5H18"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
    </svg>
  );
}
