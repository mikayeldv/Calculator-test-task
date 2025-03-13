import { FC, useState } from "react";
import Chevron from "../../../public/icons/Chevron.png";
import ChevronUp from "../../../public/icons/ChevronUp.png";

import { IOrder } from "../../types/orderTypes";

import { ISortConfig } from "../../components/Orders/model";
import styles from "./ColumnTitle.module.css";

interface IColumnTitleProps {
  width?: number;
  name: keyof IOrder;
  sortConfig: ISortConfig;
  handleSetSortConfig: (key: keyof IOrder) => void;
}

const ColumnTitle: FC<IColumnTitleProps> = ({
  width,
  name,
  sortConfig,
  handleSetSortConfig,
}) => {
  const [sort, setSort] = useState<ISortConfig>(sortConfig);

  const capitalizeName = () => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const handleSetSort = () => {
    setSort({
      key: name,
      direction: sort.direction === "asc" ? "desc" : "asc",
    });
    handleSetSortConfig(name);
  };

  return (
    <div onClick={handleSetSort}>
      <h5 style={{ width }}>
        {capitalizeName()}
        {sort.direction === "desc" ? (
          <img className={styles.chevron} src={Chevron} alt="Chevron" />
        ) : (
          <img className={styles.chevron} src={ChevronUp} alt="ChevronUp" />
        )}
      </h5>
    </div>
  );
};

export default ColumnTitle;
