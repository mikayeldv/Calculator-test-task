import { FC } from "react";

import styles from "./Title.module.css";

interface ITitleProps {
  children: React.ReactNode | string;
}

const Title: FC<ITitleProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
