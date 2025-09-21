// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function LockLoginIcon({ className, fill }: IconProps) {
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
        d="M17 11.8711H7C5.89543 11.8711 5 12.7665 5 13.8711V19.8711C5 20.9757 5.89543 21.8711 7 21.8711H17C18.1046 21.8711 19 20.9757 19 19.8711V13.8711C19 12.7665 18.1046 11.8711 17 11.8711Z"
        stroke={fill || "#292929"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.8711C12.5523 17.8711 13 17.4234 13 16.8711C13 16.3188 12.5523 15.8711 12 15.8711C11.4477 15.8711 11 16.3188 11 16.8711C11 17.4234 11.4477 17.8711 12 17.8711Z"
        stroke={fill || "#292929"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.8711V7.87109C8 6.81023 8.42143 5.79281 9.17157 5.04267C9.92172 4.29252 10.9391 3.87109 12 3.87109C13.0609 3.87109 14.0783 4.29252 14.8284 5.04267C15.5786 5.79281 16 6.81023 16 7.87109V11.8711"
        stroke={fill || "#292929"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
