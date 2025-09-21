import PromoCard from "./PromoCard";
import { PromoCardProps } from "./PromoCard";

export default function PromoSlider({
  promotions,
  className,
}: {
  promotions: PromoCardProps[];
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {promotions.map((promo) => (
          <PromoCard
            key={promo.title}
            title={promo.title}
            subtitle={promo.subtitle}
            code={promo.code}
            buttonText={promo.buttonText}
            imageUrl={promo.imageUrl}
            bgColor={promo.bgColor}
            href={promo.href}
          />
        ))}
      </div>
    </section>
  );
}
