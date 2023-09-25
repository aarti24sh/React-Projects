//import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";
//import { FaPhoneAlt } from "react-icons/fa";

const Button = ({ isOutline, icon, text }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
