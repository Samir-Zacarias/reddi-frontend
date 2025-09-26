import CardShell from "@/src/components/features/partner/CardShell";
import Spinner from "@/src/components/basics/Spinner";

export default function ProductsSectionSkeleton() {
  return (
    <CardShell>
      <div className="flex items-center justify-center animate-pulse gap-4 px-6 border-b border-gray-100 last:border-b-0 h-80">
        <Spinner />
      </div>
    </CardShell>
  );
}
