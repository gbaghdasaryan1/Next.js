import classes from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";

const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(classes.button, className, {
        [classes.primary]: appearance === "primary",
        [classes.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}

      {arrow !== "none" && (
        <span
          className={cn(classes.arrow, {
            [classes.down]: arrow === "down",
            // [classes.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
