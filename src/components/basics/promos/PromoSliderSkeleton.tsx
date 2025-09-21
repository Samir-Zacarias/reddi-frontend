import PromoCardSkeleton from "./PromoCardSkeleton";

export default function PromoSlider() {
  return (
    <section>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        <PromoCardSkeleton />
        <PromoCardSkeleton />
      </div>
    </section>
  );
}
