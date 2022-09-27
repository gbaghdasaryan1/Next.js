import cn from "classnames";
import classes from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.props";
import { forwardRef, ForwardedRef } from "react";

const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div className={cn(classes.TexareaWrapper, className)}>
      <textarea
        className={cn(classes.Textarea, {
          [classes.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={classes.ErrorMessage}> {error.message}</span>}
    </div>
  );
});

export default Textarea;
