import { useScrollY } from "../../hooks/useSrollY";
import classes from "./Up.module.css";
import UpIcon from "./Up.svg";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

const Up = () => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <motion.button className={classes.up} onClick={scrollToTop} animate={controls} initial={{ opacity: 0 }}>
      <UpIcon />
    </motion.button>
  );
};

export default Up;
