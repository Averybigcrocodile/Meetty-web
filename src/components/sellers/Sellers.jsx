import cn from "classnames";
import styles from "../../style.module.css";
import { useTranslation } from "react-i18next";
import img1 from "../../img/pic.jpg";

function Sellers({ sellersId }) {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.sellers)} id={sellersId}>
      <div className={cn(styles.sellers__header)}>
        <img src={img1} alt="" />
      </div>
      <div>{t("sellers.label")}</div>
      <div>_______________</div>
      <div className={cn(styles.sellers__info)}>
        <p>
          <i>{t("sellers.text")}</i>
        </p>
        <p>
          <b>{t("sellers.adress")}</b>
        </p>
      </div>
    </div>
  );
}

export default Sellers;
