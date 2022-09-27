import cn from "classnames";
import { priceRu } from "../../helpers/helpers";
import Card from "../Card";
import classes from "./HhData.module.css";
import { HhDataProps } from "./HhData.props";
import RateIcon from "./rate.svg";

const HhData = ({ _id, count, juniorSalary, middleSalary, seniorSalary, updatedAt }: HhDataProps) => {
  return (
    <div className={classes.Hh}>
      <Card color='white' className={classes.Count}>
        <div className={classes.Title}>All Vacansies</div>
        <div className={classes.CountValue}>{count}</div>
      </Card>
      <Card color='white' className={classes.Salary}>
        <div>
          <div className={classes.Title}>Junior</div>
          <div className={classes.SalaryValue}>{priceRu(juniorSalary)}</div>
          <div className={classes.Rate}>
            <RateIcon className={classes.Filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={classes.Title}>Middle</div>
          <div className={classes.SalaryValue}>{priceRu(middleSalary)}</div>
          <div className={classes.Rate}>
            <RateIcon className={classes.Filled} />
            <RateIcon className={classes.Filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={classes.Title}>Senior</div>
          <div className={classes.SalaryValue}>{priceRu(seniorSalary)}</div>
          <div className={classes.Rate}>
            <RateIcon className={classes.Filled} />
            <RateIcon className={classes.Filled} />
            <RateIcon className={classes.Filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HhData;
