import { FC, useState } from "react";
import { IOrder } from "../../types/orderTypes";
import Order from "./Order";

import { getSiteColor } from "./helpers/getSiteColor";
import { statusOrderAsc, statusOrderDesc } from "./constants/statusOrders";
import ColumnTitle from "../../shared/ColumnTitle";
import { tableTitles } from "./constants/tableTitles";
import { ISortConfig } from "./model";

import { getTitleWidth } from "./helpers/getTitleWidth";
import styles from "./Orders.module.css";

interface IOrdersProps {
  orders: IOrder[];
}

const Orders: FC<IOrdersProps> = ({ orders }) => {
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key: null,
    direction: "asc",
  });

  const sortedOrders = [...orders].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue: string = a[sortConfig.key];
    const bValue: string = b[sortConfig.key];

    if (sortConfig.key === "status") {
      const order =
        sortConfig.direction === "asc" ? statusOrderAsc : statusOrderDesc;
      return order.indexOf(aValue) - order.indexOf(bValue);
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  const handleSetSortConfig = (key: keyof IOrder) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  return (
    <div className={styles.orders}>
      <div className={styles.ordersHeader}>
        {tableTitles.map((title, index) => (
          <ColumnTitle
            key={index + title}
            name={title}
            sortConfig={sortConfig}
            width={getTitleWidth(title)}
            handleSetSortConfig={handleSetSortConfig}
          />
        ))}
      </div>
      {sortedOrders.map((order) => (
        <Order
          key={order.id}
          order={order}
          bgColor={getSiteColor(order.site)}
          btnContent={order.status === "DRAFT" ? "Finalize" : "Results"}
        />
      ))}
    </div>
  );
};

export default Orders;
