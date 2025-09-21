import OrderSectionServer from "@/src/components/features/repartidor/home/orderSection/OrderSectionServer";
import { Suspense } from "react";
import OrderSectionSkeleton from "@/src/components/features/repartidor/home/orderSection/OrderSectionSkeleton";

export default function HomePage() {
  return (
    <section className="px-2 py-5">
      <Suspense fallback={<OrderSectionSkeleton />}>
        <OrderSectionServer />
      </Suspense>
    </section>
  );
}
