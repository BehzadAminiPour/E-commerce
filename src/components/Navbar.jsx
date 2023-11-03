import { useGlobalContext } from "./context";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <div className={styles.navbar}>
    <div className={styles.item}>
      <h1>! forca pizza</h1>
    </div>
    <div className={styles.item}>
      <span className={styles.amount}>{amount}</span>
      <FaShoppingCart className={styles.icon} />
    </div>
  </div>

  );
};

export default Navbar;
