import { FC } from "react";

import { IOrder } from "../../../types/orderTypes";
import styles from "./Order.module.css";
import { getColorDivStyles } from "../helpers/getSiteColor";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";

interface IOrderProps {
  order: IOrder;
  bgColor: string;
  btnContent: "Results" | "Finalize";
}

const Order: FC<IOrderProps> = ({ order, bgColor, btnContent }) => {
  return (
    <div className={styles.orderContainer}>
      <div className={styles.order}>
        <div className={styles.orderNameContainer}>
          <div style={getColorDivStyles(bgColor)}></div>
          <h5 className={styles.orderName}>{order.name}</h5>
        </div>
        <div className={styles.orderType}>
          <h5>{order.type}</h5>
        </div>
        <div className={styles.orderStatus}>
          <h5>{order.status}</h5>
        </div>
        <div className={styles.orderSite}>
          <h5>{order.site}</h5>
        </div>
      </div>
      <Link to={`/${btnContent.toLowerCase()}/[${order.id}]`}>
        <Button
          backgroundColor={btnContent === "Results" ? "#2ee5ac" : "#7d7d7d"}
          btnContent={btnContent}
        />
      </Link>
    </div>
  );
};

export default Order;
