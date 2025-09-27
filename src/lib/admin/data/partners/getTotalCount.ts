import { getRandomNumberFrom1To10 } from "@/src/lib/utils";

const totalCount = 5;

const apiDelay = 300;

export default async function getTotalCount() {
  await new Promise((resolve) =>
    setTimeout(resolve, apiDelay * getRandomNumberFrom1To10())
  );
  return totalCount;
}
