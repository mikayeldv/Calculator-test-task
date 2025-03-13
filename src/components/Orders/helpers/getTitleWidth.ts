import { IOrder } from "../../../types/orderTypes";

export const getTitleWidth = (title: keyof IOrder) => {
  if (title === "status") {
    return 120;
  }

  return title === "name" ? 380 : 125;
};
