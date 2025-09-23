// src/components/icons/IconAward.tsx

import React from "react";

interface IconProps {
  className?: string;
  fill?: string;
}

export default function DeletePartnertIcon({ className, fill }: IconProps) {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.08579 0.585786C5.46086 0.210714 5.96957 0 6.5 0H10.5C11.0304 0 11.5391 0.210714 11.9142 0.585786C12.2893 0.960859 12.5 1.46957 12.5 2V4H15.5C16.0523 4 16.5 4.44772 16.5 5C16.5 5.55228 16.0523 6 15.5 6V18C15.5 18.5304 15.2893 19.0391 14.9142 19.4142C14.5391 19.7893 14.0304 20 13.5 20H3.5C2.96957 20 2.46086 19.7893 2.08579 19.4142C1.71071 19.0391 1.5 18.5304 1.5 18V6C0.947715 6 0.5 5.55228 0.5 5C0.5 4.44772 0.947715 4 1.5 4H4.5V2C4.5 1.46957 4.71071 0.960859 5.08579 0.585786ZM6.5 4H10.5V2H6.5V4ZM3.5 6V18H13.5V6H3.5ZM6.5 7C7.05228 7 7.5 7.44772 7.5 8V16C7.5 16.5523 7.05228 17 6.5 17C5.94772 17 5.5 16.5523 5.5 16V8C5.5 7.44772 5.94772 7 6.5 7ZM10.5 7C11.0523 7 11.5 7.44772 11.5 8V16C11.5 16.5523 11.0523 17 10.5 17C9.94771 17 9.5 16.5523 9.5 16V8C9.5 7.44772 9.94771 7 10.5 7Z"
        fill={fill || "white"}
      />
    </svg>
  );
}
