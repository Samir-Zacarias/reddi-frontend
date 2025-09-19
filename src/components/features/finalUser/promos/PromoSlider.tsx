import PromoCard from "./PromoCard";
import { PromoCardProps } from "@/src/lib/finalUser/type";

export default function PromoSlider({
  promotions,
}: {
  promotions: PromoCardProps[];
}) {
  return (
    <section className="py-4">
      <div className="flex space-x-4 overflow-x-auto p-4 scrollbar-hide">
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
