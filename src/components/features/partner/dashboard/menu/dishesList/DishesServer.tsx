import DishesSection from "./DishesSection";
import getDishesData from "@/src/lib/partner/dashboard/data/products/getDishesData";

const mockCategories = [
  { id: "cat1", name: "Frutas" },
  { id: "cat2", name: "Verduras" },
  { id: "cat3", name: "Hierbas" },
];

const mockTags = [
  { id: "tag1", name: "Entrada" },
  { id: "tag2", name: "Platos fuertes" },
  { id: "tag3", name: "Bebidas" },
  { id: "tag4", name: "Postres" },
];

export default async function DishesServer() {
  const data = await getDishesData();
  return (
    <DishesSection dishes={data} categories={mockCategories} tags={mockTags} />
  );
}
