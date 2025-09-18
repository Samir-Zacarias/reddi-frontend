// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function CheckIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_294_7254)">
        <path
          d="M12.3679 3.63232C12.7097 3.97412 12.7097 4.5292 12.3679 4.871L5.36794 11.871C5.02615 12.2128 4.47107 12.2128 4.12927 11.871L0.629272 8.371C0.287476 8.0292 0.287476 7.47412 0.629272 7.13232C0.971069 6.79053 1.52615 6.79053 1.86794 7.13232L4.74998 10.0116L11.132 3.63232C11.4738 3.29053 12.0289 3.29053 12.3707 3.63232H12.3679Z"
          fill={fill || "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_294_7254">
          <path
            d="M0.375 0.75H12.625V14.75H0.375V0.75Z"
            fill={fill || "white"}
          />
        </clipPath>
      </defs>
    </svg>
  );
}
