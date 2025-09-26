// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function SorterIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.89725 10.9375H1.96017C1.72211 10.9375 1.58918 11.1889 1.73661 11.3605L5.70515 15.9622C5.81874 16.0939 6.03747 16.0939 6.15227 15.9622L10.1208 11.3605C10.2682 11.1889 10.1353 10.9375 9.89725 10.9375Z"
        fill={fill || "#454545"}
      />
      <path
        d="M10.1208 7.63806L6.15227 3.03629C6.03868 2.90457 5.81995 2.90457 5.70515 3.03629L1.73661 7.63806C1.58918 7.80965 1.72211 8.06101 1.96017 8.06101H9.89725C10.1353 8.06101 10.2682 7.80965 10.1208 7.63806Z"
        fill={fill || "#454545"}
      />
    </svg>
  );
}
