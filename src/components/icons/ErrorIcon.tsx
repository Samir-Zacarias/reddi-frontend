// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function ErrorIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="2"
      height="20"
      viewBox="0 0 2 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.875 4.5C1.875 4.01602 1.48398 3.625 1 3.625C0.516016 3.625 0.125 4.01602 0.125 4.5V11.5C0.125 11.984 0.516016 12.375 1 12.375C1.48398 12.375 1.875 11.984 1.875 11.5V4.5ZM1 15.875C1.29008 15.875 1.56828 15.7598 1.7734 15.5546C1.97852 15.3495 2.09375 15.0713 2.09375 14.7812C2.09375 14.4912 1.97852 14.213 1.7734 14.0079C1.56828 13.8027 1.29008 13.6875 1 13.6875C0.709919 13.6875 0.43172 13.8027 0.226602 14.0079C0.021484 14.213 -0.09375 14.4912 -0.09375 14.7812C-0.09375 15.0713 0.021484 15.3495 0.226602 15.5546C0.43172 15.7598 0.709919 15.875 1 15.875Z"
        fill={fill || "#DC2626"}
      />
    </svg>
  );
}
