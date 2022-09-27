import cn from "classnames";
import { priceRu } from "../../helpers/helpers";
import Card from "../Card";
import classes from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";
import CheckIcon from "./checkIcon.svg";

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={classes.Advantage}>
          <CheckIcon />
          <div className={classes.Title}>{a.title}</div>
          <hr className={classes.Vline} />
          <div className={classes.description}>{a.description}</div>
        </div>
      ))}
    </>
  );
};

export default Advantages;
