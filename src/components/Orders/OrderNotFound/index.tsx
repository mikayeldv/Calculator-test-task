import { FC } from "react";
import Button from "../../../shared/Button";

import styles from "./OrderNotFound.module.css";

interface IOrderNotFoundProps {
  handleReset: () => void;
}

const OrderNotFound: FC<IOrderNotFoundProps> = ({ handleReset }) => {
  return (
    <div className={styles.orderNotFound}>
      <span>Your search did not match any results.</span>
      <Button
        onClick={handleReset}
        backgroundColor="#2EE5AC"
        btnContent="Reset"
      />
    </div>
  );
};

export default OrderNotFound;
