import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import styles from "./CartContainer.module.css";
const CartContainer = () => {
  const { cart, clearCart, total, buy } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className={styles.cart}>
        {/* cart header */}
        <header>
          <h2>سبد خرید</h2>
          <h4> در حال حاضر خالیست ! </h4>
          <button className={styles["btn-buy"]} onClick={buy}>
            سفارش
          </button>
        </header>
      </section>
    );
  }
  return (
    <section className={styles.cart}>
      {/* cart header */}
      <header>
        <h2>سبد خرید</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <hr />
      <footer className={styles.footer}>
        <div>
          <h4>
            مجموع : <span>{total} تومان </span>
          </h4>
        </div>
        <button className={styles["clear-btn"]} onClick={clearCart}>
          پاک کردن همه
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
