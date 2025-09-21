// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function EyeLoginIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 4.37158L9.87868 10.2503M20 20.3716L14.1213 14.4929M9.87868 10.2503C9.33579 10.7932 9 11.5432 9 12.3716C9 14.0284 10.3431 15.3716 12 15.3716C12.8284 15.3716 13.5784 15.0358 14.1213 14.4929M9.87868 10.2503L14.1213 14.4929M6.76821 7.1398C4.72843 8.47058 2.96378 10.3976 2 12.3714C3.74646 15.948 8.12201 19.3716 11.9998 19.3716C13.7376 19.3716 15.5753 18.684 17.2317 17.6033M9.76138 5.71875C10.5114 5.49474 11.2649 5.37158 12.0005 5.37158C15.8782 5.37158 20.2531 8.79557 22 12.3718C21.448 13.5017 20.6336 14.6165 19.6554 15.6128"
        stroke={fill || "#737373"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
