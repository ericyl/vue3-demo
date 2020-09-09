import api from "./config";
import Dog from "@/types/Dog";

export function dog(): Promise<Dog> {
  return api.get<Dog>("/dog");
}
