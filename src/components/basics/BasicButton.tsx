import React from "react";

interface LinkButtonProps {
  children: React.ReactNode;
  type?: string;
  className?: string;
  disabled?: boolean;
}

export default function BasicButton({
  children,
  className,
  type,
  disabled = false,
}: LinkButtonProps) {
  return (
    <button
      className={
        disabled
          ? `flex items-center justify-center opacity-50 rounded-2xl border cursor-not-allowed ${className}`
          : `flex items-center justify-center transition-colors duration-500 border-mainBorder rounded-2xl border group  ${className}`
      }
      type={type === "submit" ? type : type === "reset" ? type : "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
