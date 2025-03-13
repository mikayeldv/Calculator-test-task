import { FC } from "react";

import styles from "./Button.module.css";
interface IButtonProps {
  btnContent: string;
  backgroundColor: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ btnContent, backgroundColor, onClick }) => {
  return (
    <button
      style={{ backgroundColor }}
      className={styles.btn}
      onClick={onClick}
    >
      {btnContent}
    </button>
  );
};

export default Button;
