// import cn from "classnames";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import classes from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={classes.wrapper}>
      <Header className={classes.header} />
      <Sidebar className={classes.sidebar} />
      <div className={classes.body}>
        <div>{children}</div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
};

export default Layout;
