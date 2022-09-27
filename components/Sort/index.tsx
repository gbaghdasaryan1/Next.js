import cn from "classnames";
import classes from "./Sort.module.css";
import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from "./Sort.svg";

const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
  return (
    <div className={cn(classes.Sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [classes.active]: sort == SortEnum.Rating,
        })}
      >
        <SortIcon className={classes.SortIcon} />
        With Rating
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [classes.active]: sort == SortEnum.Price,
        })}
      >
        <SortIcon className={classes.SortIcon} />
        With Price
      </span>
    </div>
  );
};

export default Sort;
