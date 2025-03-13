import { IOrder } from "../../types/orderTypes";

export interface ISortConfig {
  key: keyof IOrder | null;
  direction: "asc" | "desc";
}
