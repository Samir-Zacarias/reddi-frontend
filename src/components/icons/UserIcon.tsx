// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function UserIcon({ className, fill }: IconProps) {
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
        d="M9.22874 10.3671C11.8981 10.3671 14.0621 8.20315 14.0621 5.53377C14.0621 2.8644 11.8981 0.700439 9.22874 0.700439C6.55937 0.700439 4.39541 2.8644 4.39541 5.53377C4.39541 8.20315 6.55937 10.3671 9.22874 10.3671Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
      <path
        d="M14.7267 20.2634C15.3611 20.2498 15.9809 20.0699 16.524 19.7417C17.0671 19.4135 17.5146 18.9485 17.8216 18.3931C18.1286 17.8378 18.2845 17.2115 18.2736 16.577C18.2627 15.9425 18.0855 15.322 17.7596 14.7775C16.8995 13.4199 15.7102 12.3018 14.3022 11.527C12.8942 10.7523 11.3132 10.346 9.70607 10.346C8.09897 10.346 6.51793 10.7523 5.10992 11.527C3.7019 12.3018 2.5126 13.4199 1.65252 14.7775C1.32662 15.322 1.14935 15.9425 1.13847 16.577C1.12759 17.2115 1.28345 17.8378 1.59049 18.3931C1.89753 18.9485 2.34498 19.4135 2.8881 19.7417C3.43122 20.0699 4.05097 20.2498 4.68541 20.2634H14.7267Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill || "none"}
      />
    </svg>
  );
}
