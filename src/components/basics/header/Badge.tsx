// Pequeño componente para las insignias (badges) de notificación
export default function Badge({
  count,
  color,
}: {
  count: number;
  color: string;
}) {
  if (count === 0) return null;
  return (
    <span
      className={`absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full ${color} text-xs text-white`}
    >
      {count}
    </span>
  );
}
