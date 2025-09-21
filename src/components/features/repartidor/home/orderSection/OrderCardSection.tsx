"use client";

import OrderCard from "@/src/components/features/repartidor/home/orderSection/OrderCard";
import { OrderData } from "@/src/lib/repartidor/type";

export default function OrderCardSection({ orders }: { orders: OrderData[] }) {
  return (
    <>
      <div className="font-bold mb-5 text-xl">
        <span className="text-primary">Pedidos</span> <span>Activos</span>
      </div>
      <div className="space-y-6">
        {orders.map((order) => (
          <OrderCard key={order.orderId} {...order} onAccept={() => {}} />
        ))}
      </div>
    </>
  );
}
