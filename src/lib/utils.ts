import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
//  - Local:    http://localhost:3000    │
//    │   - Network:  http://10.2.0.2:3000  