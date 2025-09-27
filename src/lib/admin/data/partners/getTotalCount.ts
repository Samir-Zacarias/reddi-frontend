import { getRandomNumberFrom1To10 } from "@/src/lib/utils";
import { API_DELAY } from "@/src/lib/type";

const totalCount = 5;

export default async function getTotalCount() {
  await new Promise((resolve) =>
    setTimeout(resolve, API_DELAY * getRandomNumberFrom1To10())
  );
  return totalCount;
}
