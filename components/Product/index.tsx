import cn from "classnames";
import Image from "next/image";
import { useState, useRef, forwardRef, ForwardedRef } from "react";
import { declOfNum, priceRu } from "../../helpers/helpers";
import Button from "../Button";
import Card from "../Card";
import { Divider } from "../Divider";
import Rating from "../Rating";
import { Review } from "../Review";
import { ReviewForm } from "../ReviewForm";
import Tag from "../Tag";
import classes from "./Product.module.css";
import { ProductProps } from "./Product.props";
import { motion } from "framer-motion";

const Product = motion(
  forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    const variants = {
      visible: { opacity: 1, height: "auto" },
      hidden: { opacity: 0, height: 0 },
    };

    const scrollToReview = () => {
      setIsReviewOpened(true);
      reviewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    return (
      <div className={className} ref={ref} {...props}>
        <Card className={classes.Product}>
          <div className={classes.Logo}>
            <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70} />
          </div>
          <div className={classes.Title}>{product.title}</div>
          <div className={classes.Price}>
            {priceRu(product.price)}
            {product.oldPrice && (
              <Tag className={classes.OldPrice} color='green'>
                {priceRu(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <div className={classes.Credit}>
            {priceRu(product.credit)}/<span className={classes.Month}>мес</span>
          </div>
          <div className={classes.Rating}>
            <Rating rating={product.reviewAvg ?? product.initialRating} />
          </div>
          <div className={classes.Tags}>
            {product.categories.map((c) => (
              <Tag key={c} className={classes.Category} color='ghost'>
                {c}
              </Tag>
            ))}
          </div>
          <div className={classes.PriceTitle}>цена</div>
          <div className={classes.CreditTitle}>кредит</div>
          <div className={classes.RateTitle}>
            <a href='#ref' onClick={scrollToReview}>
              {product.reviewCount} {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
            </a>
          </div>
          <Divider className={classes.Hr} />
          <div className={classes.Description}>{product.description}</div>
          <div className={classes.Feature}>
            {product.characteristics.map((c) => (
              <div className={classes.Characteristics} key={c.name}>
                <span className={classes.CharacteristicsName}>{c.name}</span>
                <span className={classes.CharacteristicsDots}></span>
                <span className={classes.CharacteristicsValue}>{c.value}</span>
              </div>
            ))}
          </div>
          <div className={classes.AdvBlock}>
            {product.advantages && (
              <div className={classes.Advantages}>
                <div className={classes.AdvTitle}>Преимущества</div>
                <div>{product.advantages}</div>
              </div>
            )}
            {product.disadvantages && (
              <div className={classes.disadvantages}>
                <div className={classes.advTitle}>Недостатки</div>
                <div>{product.disadvantages}</div>
              </div>
            )}
          </div>
          <Divider className={cn(classes.Hr, classes.Hr2)} />
          <div className={classes.Actions}>
            <Button appearance='primary'>Узнать подробнее</Button>
            <Button appearance='ghost' arrow={isReviewOpened ? "down" : "right"} className={classes.ReviewButton} onClick={() => setIsReviewOpened(!isReviewOpened)}>
              Читать отзывы
            </Button>
          </div>
        </Card>
        <motion.div animate={isReviewOpened ? "visible" : "hidden"} variants={variants} initial='hidden'>
          <Card color='blue' className={cn(classes.Reviews)} ref={reviewRef}>
            {product.reviews.map((r) => (
              <div key={r._id}>
                <Review review={r} />
                <Divider />
              </div>
            ))}

            <ReviewForm productId={product._id} />
          </Card>
        </motion.div>
      </div>
    );
  })
);

export default Product;
