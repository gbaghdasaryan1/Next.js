import { useEffect, useState, KeyboardEvent } from "react";
import classes from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import StarIcon from "./star.svg";

const Rating = ({
  rating,
  setRating,
  isEditable = false,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onStarClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const handleSpace = (i: number, event: KeyboardEvent<SVGAElement>) => {
    if (event.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(classes.star, {
            [classes.filled]: i < currentRating,
            [classes.editabel]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onStarClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
