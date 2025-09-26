import StatCardSkeleton from "./StatCardSkeleton";
export default function StatSectionSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-${count} xl:grid-cols-${count} mb-4`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <StatCardSkeleton key={index} />
      ))}
    </div>
  );
}
