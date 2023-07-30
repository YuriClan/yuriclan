// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";
 
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export default cn; // Exporting 'cn' as the default export
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
