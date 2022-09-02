import cn from "classnames";
import classes from "./P.module.css";
import { PProps } from "./P.props";

const P = ({ children, size = "m", className, ...props }: PProps) => {
  return (
    <p
      className={cn(classes.p, className, {
        [classes.s]: size === "s",
        [classes.m]: size === "m",
        [classes.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
