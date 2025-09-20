// Pequeño componente para las insignias (badges) de notificación
export default function Badge({
  count = 1,
  color = "bg-red-500",
  className = "",
}: {
  count?: number;
  color?: string;
  className?: string;
}) {
  if (count === 0) return null;
  return (
    <span
      className={`absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center ${color} text-xs text-white ${className}`}
    >
      {count}
    </span>
  );
}
