import { HeaderData } from "@/src/lib/finalUser/type";

// Utilidad para el tiempo de respuesta de la API
import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

const apiDelay = 500;

// HeaderData
export default async function getHeaderData(): Promise<HeaderData> {
  console.log("Fetching user data on the server...");
  // Simulación de llamada API
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  const data: HeaderData = {
    userName: "Pepito Núñez",
    address: [
      {
        id: 1,
        address: "Muelle 03, 93",
        label: "Yate",
      },
      {
        id: 2,
        address: "Muelle 03, 93",
        label: "Villa",
      },
    ],
    notificationCount: 8,
    carCount: 2,
  };
  return data;
}
