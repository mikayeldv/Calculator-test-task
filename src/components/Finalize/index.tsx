import { FC } from "react";

import ChevronLeft from "../../../public/icons/ChevronLeft.png";

import Title from "../../shared/Title";
import styles from "./Finalize.module.css";
import { Link } from "react-router-dom";

const Finalize: FC = () => {
  return (
    <div>
      <Title>Finalize</Title>
      <p>Order basket redesing</p>
      <Link to={"/"} className={styles.back}>
        <img width={9} height={16} src={ChevronLeft} alt="chevronLeft" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default Finalize;
