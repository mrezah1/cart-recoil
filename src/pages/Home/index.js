import { useState, useEffect } from "react";
import styles from "./style.module.css";
import useCart from "recoil-utils";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const fetchProducts = async () => {
    const getData = await fetch("https://fakestoreapi.com/products");
    const data = await getData.json();
    setProducts(data);
  };
  const addToCartHandler = (item) => {
    setCart((prevOrder) => {
      const isExist = prevOrder.find((product) => product.id === item.id);
      return isExist
        ? prevOrder.map((product) => {
            if (product.id === item.id)
              return { ...product, quantity: product.quantity + 1 };
            return product;
          })
        : [...prevOrder, { ...item, quantity: 1 }];
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h2 className="text-center mt-3">Products</h2>
      <div className={styles.wrapperProducts}>
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id}>
              <div className={styles.wrapImg}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h2>{item.title.slice(0, 20)}</h2>
                <p>{item.description.slice(0, 70)}</p>
                <button onClick={() => addToCartHandler(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
export default Home;
