import { Link } from "react-router-dom";
import useCart from "recoil-utils";
import st from "./style.module.css";

const Nav = () => {
  const [orders] = useCart();
  return (
    <nav className={st.nav}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <Link to="/cart">
          <span className={st.cart}>{orders?.length} 🛒</span>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
