export type StatData = {
  title: string;
  value: string;
};

export interface Restaurant {
  id: string;
  name: string;
  nit: string;
  address: string;
  type: string;
  totalOrders: string;
  state: "open" | "closed";
}
