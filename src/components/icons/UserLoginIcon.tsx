// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function UserLoginIcon({ className, fill }: IconProps) {
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
        d="M12 11.8711C14.2091 11.8711 16 10.0802 16 7.87109C16 5.66195 14.2091 3.87109 12 3.87109C9.79086 3.87109 8 5.66195 8 7.87109C8 10.0802 9.79086 11.8711 12 11.8711Z"
        stroke={fill || "#292929"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 21.8711V19.8711C6 18.8102 6.42143 17.7928 7.17157 17.0427C7.92172 16.2925 8.93913 15.8711 10 15.8711H14C15.0609 15.8711 16.0783 16.2925 16.8284 17.0427C17.5786 17.7928 18 18.8102 18 19.8711V21.8711"
        stroke={fill || "#292929"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
