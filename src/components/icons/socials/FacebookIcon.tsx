// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
}

export default function FacebookIcon({ className }: IconProps) {
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
        d="M23.625 11.7432C23.625 5.32129 18.4219 0.118164 12 0.118164C5.57812 0.118164 0.375 5.32129 0.375 11.7432C0.375 17.5454 4.62609 22.3547 10.1836 23.2275V15.1036H7.23047V11.7432H10.1836V9.18191C10.1836 6.26863 11.918 4.65941 14.5744 4.65941C15.8466 4.65941 17.1769 4.88629 17.1769 4.88629V7.74566H15.7106C14.2669 7.74566 13.8164 8.64191 13.8164 9.56113V11.7432H17.0405L16.5248 15.1036H13.8164V23.2275C19.3739 22.3547 23.625 17.5454 23.625 11.7432Z"
        fill="currentColor"
      />
    </svg>
  );
}
