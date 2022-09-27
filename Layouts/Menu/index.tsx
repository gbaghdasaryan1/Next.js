import cn from "classnames";
import classes from "./Menu.module.css";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../Interfaces/menu.interface";

import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion";

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();
  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };
  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpend = !m.isOpend;
          }
          return m;
        })
      );
  };
  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`${m.route}`}>
              <a>
                <div
                  className={cn(classes.FirstLevel, {
                    [classes.FirstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icons}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={classes.SecondBlock}>
        {menu?.map((m) => {
          if (m.pages.map((p) => p.alias).includes(router.asPath.split("/")[1])) {
            m.isOpend = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={classes.SecondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                {m._id.secondCategory}
              </div>
              <motion.div layout initial={m.isOpend ? "visible" : "hidden"} animate={m.isOpend ? "visible" : "hidden"} variants={variants} className={cn(classes.SecondLevelBlock)}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
        <Link href={`/${route}/${p.alias}`}>
          <a
            className={cn(classes.ThirdLevel, {
              [classes.ThirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
            })}
          >
            {p.category}
          </a>
        </Link>
      </motion.div>
    ));
  };
  return <div className={classes.Menu}>{buildFirstLevel()}</div>;
};

export default Menu;
