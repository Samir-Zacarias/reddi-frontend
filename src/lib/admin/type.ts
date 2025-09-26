export type StatData = {
  title: string;
  value: string;
};

export interface Restaurant {
  id: string;
  imageUrl: string;
  name: string;
  nit: string;
  address: string;
  type: string;
  totalOrders: string;
  state: "open" | "closed";
}

export type OrderDir = "asc" | "desc";

export type Sortables = "id" | "name" | "totalOrders";
