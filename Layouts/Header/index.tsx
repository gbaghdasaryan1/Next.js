import React from "react";
import { HeaderProps } from "./Header.props";
// import classes from "./Header.module.css";

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
