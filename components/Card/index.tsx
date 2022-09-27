import cn from "classnames";
import { forwardRef } from "react";
import classes from "./Card.module.css";
import { CardProps } from "./Card.props";
import { ForwardedRef } from "react";
import { motion } from "framer-motion";

export const Card = motion(
  forwardRef(({ color = "white", children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
      <div
        className={cn(classes.Card, className, {
          [classes.Clue]: color == "blue",
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  })
);

export default Card;
