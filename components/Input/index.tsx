import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";
import classes from "./Input.module.css";
import { InputProps } from "./Input.props";

const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(classes.InputWrapper, className)}>
      <input
        type='text'
        className={cn(className, classes.Input, {
          [classes.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={classes.ErrorMessage}>{error.message}</span>}
    </div>
  );
});

export default Input;
