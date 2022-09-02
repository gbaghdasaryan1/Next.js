import cn from "classnames";
import { FooterProps } from "./Footer.props";
import classes from "./Footer.module.css";
import { format } from "date-fns";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, classes.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>

      <a href='#' target='_blank'>
        Пользовательское соглашение
      </a>
      <a href='#' target='_blank'>
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
