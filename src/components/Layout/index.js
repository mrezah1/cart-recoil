import Nav from "../Nav";
import st from './style.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={st.main}>{children}</main>
      <footer className={st.footer}>CopyLeft - 2022</footer>
    </>
  );
};
export default Layout;
