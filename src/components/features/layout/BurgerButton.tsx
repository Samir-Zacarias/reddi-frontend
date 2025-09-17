interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function BurgerButton({
  isOpen,
  onClick,
  className,
}: BurgerButtonProps) {
  const commonBarStyles =
    "absolute block h-0.5 bg-white rounded-full transition-all duration-150";

  return (
    <button
      onClick={onClick}
      className={`relative aspect-square h-10 z-50 bg-[#292929] rounded-lg ${className}`}
    >
      <span
        className={` ${commonBarStyles} ${
          isOpen
            ? "w-3/4 left-1/2 -translate-x-1/2 rotate-45"
            : "w-2/5 left-2 -translate-y-[7px]"
        }`}
      ></span>
      <span
        className={` ${commonBarStyles} ${
          isOpen ? "opacity-0" : "w-3/5 left-2 opacity-100"
        }`}
      ></span>
      <span
        className={` ${commonBarStyles} ${
          isOpen
            ? "w-3/4 left-1/2 -translate-x-1/2 -rotate-45"
            : "w-3/5 left-2 translate-y-[7px]"
        }`}
      ></span>
    </button>
  );
}
