import cn from "classnames";
import styles from "../../style.module.css";
import backgroundImg from "../../img/background_main.jpg";
import { useTranslation } from "react-i18next";

function Main({ homeId }) {
  const { t } = useTranslation();
  return (
    <div className={cn(styles.main)} id={homeId}>
      <img
        className={cn(styles.main__background)}
        src={backgroundImg}
        alt="background"
      />
      <div className={cn(styles.main__text)}>{t("main.text")}</div>
    </div>
  );
}

export default Main;
