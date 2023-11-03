import { FaTrash } from "react-icons/fa";
import styles from "./CartItem.module.css";
import { useGlobalContext } from "./context";
const CartItem = ({ id, img, ingredients, title, price ,amount}) => {
  const { removeCartItem, increase ,decrease} = useGlobalContext();

  return (
    <section className={styles.product}>
      <div className={styles["product-item"]}>
        <div>
          <h2>{title}</h2>
          <p>{ingredients}</p>
        </div>
        <img src={img} alt="pizza-image" />
      </div>
      <div className={styles["product-item"]}>
        <span className={styles.money}>
          <span>{price}</span> تومان
        </span>
        <div>
          <button onClick={()=>increase(id)} className={styles["item-amount"]}>
            +
          </button>
          <span className={styles["item-amount"]}>{amount}</span>
          <button onClick={() =>decrease (id)} className={styles["item-amount"]}>
            -
          </button>
          <FaTrash  onClick={() => removeCartItem(id)} className={styles["remove-btn"]}/>
        </div>
      </div>
    </section>


  );
};

export default CartItem;
