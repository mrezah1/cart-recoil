import useCart from "recoil-utils";
import style from "./style.module.css";

const Cart = () => {
  const [orders, setOrders] = useCart();
  console.log(orders);
  const totalPrice = orders.reduce((acc, n) => acc + n.price * n.quantity, 0);
  const incrementQ = (id) =>
    setOrders((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        return item;
      })
    );
  const decrementQ = (id) =>
    setOrders((prev) =>
      prev.map((item) => {
        if (item.id === id && item.quantity > 1)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      })
    );
  const removeFromCart = (id) => {
    alert(id);
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <h2 className="text-center mt-3">Cart Page</h2>
      {orders.length > 0 ? (
        <div className={style.container}>
          <div className={style.wrapperCart}>
            <div className={style.cartItem}>
              <div className={style.cartTitle}>Product</div>
              <div className={style.cartPrice}>Price</div>
              <div className={style.cartQuantity}>Quantity</div>
            </div>
            {orders.map((item) => (
              <div key={item.id} className={style.cartItem}>
                <div className={style.cartTitle}>
                  <img src={item.image} />
                  <span>{item.title}</span>
                </div>
                <div className={style.cartPrice}>{item.price}$</div>
                <div className={style.cartQuantity}>
                  <button onClick={() => incrementQ(item.id)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => decrementQ(item.id)}>-</button>
                </div>
                <div
                  onClick={() => removeFromCart(item.id)}
                  className={style.cartClose}
                >
                  ❌
                </div>
              </div>
            ))}
          </div>
          <div className={style.checkout}>
            <div>
              <span>Total Price</span>
              <span>{totalPrice}$</span>
            </div>
            <div>
              <span>Discount</span>
              <span>0</span>
            </div>
            <div>
              <span>Final Price</span>
              <span>{totalPrice}$</span>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your Cart is empty!</p>
      )}
    </>
  );
};
export default Cart;
