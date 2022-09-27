import React from "react";
import Menu from "../Menu";
import { SidebarProps } from "./Sidebar.props";
import classes from "./Sidebar.module.css";
import Logo from "../logo.svg";
import cn from "classnames";
import Search from "../../components/Search";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, classes.Sidebar)} {...props}>
      <Logo className={classes.Logo} />
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
