// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function SuccessPartnerIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.8681 5.63232C13.2099 5.97412 13.2099 6.5292 12.8681 6.871L5.86807 13.871C5.52627 14.2128 4.97119 14.2128 4.62939 13.871L1.12939 10.371C0.787598 10.0292 0.787598 9.47412 1.12939 9.13232C1.47119 8.79053 2.02627 8.79053 2.36807 9.13232L5.2501 12.0116L11.6321 5.63232C11.9739 5.29053 12.529 5.29053 12.8708 5.63232H12.8681Z"
        fill={fill || "#16A34A"}
      />
    </svg>
  );
}
