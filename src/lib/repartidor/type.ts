import { OrderCardProps } from "@/src/components/features/repartidor/home/orderSection/OrderCard";

export type OrderData = Omit<OrderCardProps, "onAccept">;
