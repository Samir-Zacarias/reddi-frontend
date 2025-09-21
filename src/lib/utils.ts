import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomNumberFrom1To10(): number {
  return Math.floor(Math.random() * 10) + 1;
}
