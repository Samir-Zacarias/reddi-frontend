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
        d="M12 14.8711C13.1046 14.8711 14 13.9757 14 12.8711C14 11.7665 13.1046 10.8711 12 10.8711C10.8954 10.8711 10 11.7665 10 12.8711C10 13.9757 10.8954 14.8711 12 14.8711Z"
        stroke={fill || "#292929"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12.8711C19.333 17.5381 16 19.8711 12 19.8711C8 19.8711 4.667 17.5381 2 12.8711C4.667 8.20409 8 5.87109 12 5.87109C16 5.87109 19.333 8.20409 22 12.8711Z"
        stroke={fill || "#292929"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
