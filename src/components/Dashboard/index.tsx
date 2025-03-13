import { useEffect, useState } from "react";
import Orders from "../Orders";
import Search from "../Search";
import Title from "../../shared/Title";

import { IOrder } from "../../types/orderTypes";
import getData from "../../services/getData";
import Loading from "../Loading";
import OrderNotFound from "../Orders/OrderNotFound";
import { getTrueUrl } from "../Orders/helpers/getTrueUrl";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const data = getData();
    data.then((res) => {
      setOrders(
        res.tests.map((test) => {
          return {
            ...test,
            site: getTrueUrl(
              res.sites.find((site) => site.id === test.siteId)?.url ?? ""
            ),
            id: test.id.toString(),
          };
        })
      );
    });
  }, []);

  const handleSetSearchValue = (val: string) => {
    setSearchValue(val);
  };

  const handleReset = () => {
    setSearchValue("");
  };

  if (!orders.length)
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );

  const filteredOrders: IOrder[] = orders.filter((order) => {
    return order.name.includes(searchValue);
  });

  return (
    <div className={styles.dashboard}>
      <Title>Dashboard</Title>
      <div className={styles.content}>
        <Search
          orders={filteredOrders}
          handleSetSearchValue={handleSetSearchValue}
          searchValue={searchValue}
        />
        {filteredOrders.length ? (
          <Orders orders={filteredOrders} />
        ) : (
          <OrderNotFound handleReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
