import { FC } from "react";

import ChevronLeft from "../../../public/icons/ChevronLeft.png";

import Title from "../../shared/Title";
import { Link } from "react-router-dom";
import styles from "./Results.module.css";

const Results: FC = () => {
  return (
    <div>
      <Title>Results</Title>
      <p>Order basket redesing</p>
      <Link to={"/"} className={styles.back}>
        <img width={9} height={16} src={ChevronLeft} alt="chevron" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default Results;
