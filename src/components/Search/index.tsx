import styles from "./Search.module.css";

import SearchIcon from "../../../public/icons/Search.png";
import { IOrder } from "../../types/orderTypes";
import { FC } from "react";

interface ISearchProps {
  orders: IOrder[];
  searchValue: string;
  handleSetSearchValue: (val: string) => void;
}

const Search: FC<ISearchProps> = ({
  orders,
  searchValue,
  handleSetSearchValue,
}) => {
  return (
    <div className={styles.search}>
      <img className={styles.searchIcon} src={SearchIcon} alt="search" />
      <input
        type="text"
        className={styles.input}
        value={searchValue}
        onChange={(e) => handleSetSearchValue(e.target.value)}
        placeholder="What test are you looking for?"
      />
      <span className={styles.testsCount}>{orders.length} tests</span>
    </div>
  );
};

export default Search;
