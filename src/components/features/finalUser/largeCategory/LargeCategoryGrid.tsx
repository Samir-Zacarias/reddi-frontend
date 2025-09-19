import CategoryCard from "@/src/components/features/main/categories/CategoryCard";

const largeCategories = [
  {
    name: "Mercado",
    imageUrl: "/Market.svg",
    href: "/mercado",
  },
  {
    name: "Restaurantes",
    imageUrl: "/Restaurants.svg",
    href: "/restaurantes",
  },
];

export default function LargeCategoryGrid() {
  return (
    <section className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {largeCategories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            imageUrl={category.imageUrl}
            href={category.href}
            size="large"
          />
        ))}
      </div>
    </section>
  );
}
