import ProductsSection from "./ProductsSection";
import getProductsData from "@/src/lib/partner/dashboard/data/products/getProductsData";

const mockCategories = [
  { id: "cat1", name: "Frutas" },
  { id: "cat2", name: "Verduras" },
  { id: "cat3", name: "Hierbas" },
];

export default async function ProductServer() {
  const data = await getProductsData();
  return <ProductsSection products={data} categories={mockCategories} />;
}
