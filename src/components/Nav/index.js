import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "atom/cart";
import st from "./style.module.css";

const Nav = () => {
  const orders = useRecoilValue(cartState);
  return (
    <nav className={st.nav}>
        <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <span className={st.cart}>{orders?.length} 🛒</span>
      </div>
    </nav>
  );
};
export default Nav;
