import cn from "classnames";
import classes from "./Tag.module.css";
import { Tagprops } from "./Tag.props";

const Tag = ({
  children,
  size = "s",
  className,
  color = "ghost",
  href,
  ...props
}: Tagprops) => {
  return (
    <div
      className={cn(classes.tag, className, {
        [classes.s]: size === "s",
        [classes.m]: size === "m",
        [classes.ghost]: color === "ghost",
        [classes.red]: color === "red",
        [classes.grey]: color === "grey",
        [classes.green]: color === "green",
        [classes.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
