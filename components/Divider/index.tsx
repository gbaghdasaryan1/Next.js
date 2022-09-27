import { DividerProps } from "./Divider.props";
import classes from "./Divider.module.css";
import cn from "classnames";

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={cn(className, classes.Hr)} {...props} />;
};
