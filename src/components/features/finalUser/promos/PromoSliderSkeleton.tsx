import PromoCardSkeleton from "./PromoCardSkeleton";

export default function PromoSlider() {
  return (
    <section className="py-4">
      <div className="flex space-x-4 overflow-x-auto p-4 scrollbar-hide">
        <PromoCardSkeleton />
        <PromoCardSkeleton />
      </div>
    </section>
  );
}
