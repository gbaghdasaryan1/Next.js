// import cn from "classnames";
import classes from "./TopPageComponent.module.css";
import { TopPageComponentProps } from "./TopPageComponent.props";
import Htag from "../../components/Htag";
import Tag from "../../components/Tag";
import HhData from "../../components/HhData";
import { TopLevelCategory } from "../../Interfaces/page.iterface";
import Advantages from "../../components/Advantages";
import Sort from "../../components/Sort";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useReducer, useEffect } from "react";
import { sortReducer } from "./sort.reducer";
import Product from "../../components/Product";

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Title}>
        <Htag tag='h1'>{page.title}</Htag>

        {products && (
          <Tag color='grey' size='m'>
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts &&
          sortedProducts.map((p) => {
            return <Product key={p._id} product={p} layout />;
          })}
      </div>

      <div className={classes.HhTitle}>
        <Htag tag='h2'>Vacansies - {page.category}</Htag>

        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag='h2'>Advantages</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <div className={classes.Seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <Htag tag='h2'>Geted Skills</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color='primary'>
          {t}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
