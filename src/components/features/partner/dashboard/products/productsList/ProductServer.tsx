import ProductsSection from "./ProductsSection";
import getProductsData from "@/src/lib/partner/dashboard/data/products/getProductsData";
import { productCategories } from "@/src/lib/type";

export default async function ProductServer() {
  const data = await getProductsData();
  return <ProductsSection products={data} categories={productCategories} />;
}
