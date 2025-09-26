import { RestaurantListProps } from "@/src/components/features/admin/dashboard/partners/RestaurantList";
import { Restaurant } from "@/src/lib/admin/type";
import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

interface GetPartnersDataParams {
  page?: number;
  q?: string;
  type?: string;
  state?: string;
  orderBy?: string;
  order?: string;
}

const mockRestaurants: Restaurant[] = [
  {
    id: "#12345",
    imageUrl: "/ellipse.svg",
    name: "Pizza express",
    nit: "900123456-7",
    address: "Calle 123#2322",
    type: "Restaurante",
    totalOrders: "1,247",
    state: "open",
  },
  {
    id: "#12346",
    imageUrl: "/ellipse.svg",
    name: "Super Burger",
    nit: "900123456-8",
    address: "Avenida 45#12-3",
    type: "Comida Rápida",
    totalOrders: "980",
    state: "closed",
  },
  {
    id: "#12347",
    imageUrl: "/ellipse.svg",
    name: "Café del Sol",
    nit: "900123456-9",
    address: "Carrera 7#82-10",
    type: "Cafetería",
    totalOrders: "2,510",
    state: "open",
  },
  {
    id: "#12348",
    imageUrl: "/ellipse.svg",
    name: "Tacos el Jefe",
    nit: "900123457-0",
    address: "Transversal 5#11-9",
    type: "Restaurante",
    totalOrders: "753",
    state: "closed",
  },
  {
    id: "#12349",
    imageUrl: "/ellipse.svg",
    name: "Sushi Time",
    nit: "900123457-1",
    address: "Calle 90#15-50",
    type: "Restaurante",
    totalOrders: "1,890",
    state: "open",
  },
];

const data: RestaurantListProps = {
  restaurants: mockRestaurants,
  totalCount: mockRestaurants.length,
};

const apiDelay = 500;

export default async function getPartnersData({
  page = 1,
  q = "",
  type = "",
  state = "",
  orderBy = "",
  order = "",
}: GetPartnersDataParams): Promise<RestaurantListProps> {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return data;
}
