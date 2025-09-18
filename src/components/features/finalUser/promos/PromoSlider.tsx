// components/promotions/PromoSlider.tsx

import PromoCard from "./PromoCard";

// Datos de ejemplo. En una aplicación real, esto vendría de una API.
const promotions = [
  {
    title: "35% off en tu primera compra",
    subtitle: "Válido para pedidos de RD$700",
    code: "Usa el código de REDDINOW.",
    buttonText: "Claim deal",
    imageUrl: "/pizza-promo.svg", // Asegúrate de tener esta imagen en /public/images
    bgColor: "bg-orange-100",
    href: "/deals/reddinow",
  },
  {
    title: "Envío Gratis en Pollo",
    subtitle: "En pedidos sobre RD$500",
    code: "Usa el codigo POLLITO.",
    buttonText: "Ver ofertas",
    imageUrl: "/pizza-promo.svg",
    bgColor: "bg-green-200",
    href: "/deals/pollo-gratis",
  },
];

export default function PromoSlider() {
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
