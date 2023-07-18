import cn from "classnames";
import styles from "../../style.module.css";
import { useTranslation } from "react-i18next";
import img1 from "../../img/product1.jpg";
import img2 from "../../img/product2.jpg";
import img3 from "../../img/product3.jpg";
import img4 from "../../img/product4.jpg";
import img5 from "../../img/product5.jpg";
import img6 from "../../img/product6.jpg";

function Products({ productsId }) {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.products)} id={productsId}>
      <div className={cn(styles.product__assort)}>
        <div className={cn(styles.product)}>
          <img src={img1} alt="" />
          <span>{t("products.name1")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img2} alt="" />
          <span>{t("products.name2")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img3} alt="" />
          <span>{t("products.name3")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img4} alt="" />
          <span>{t("products.name4")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img5} alt="" />
          <span>{t("products.name5")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img6} alt="" />
          <span>{t("products.name6")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img1} alt="" />
          <span>{t("products.name1")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img2} alt="" />
          <span>{t("products.name2")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img3} alt="" />
          <span>{t("products.name3")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img4} alt="" />
          <span>{t("products.name4")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img5} alt="" />
          <span>{t("products.name5")}</span>
        </div>
        <div className={cn(styles.product)}>
          <img src={img6} alt="" />
          <span>{t("products.name6")}</span>
        </div>
      </div>
    </div>
  );
}

export default Products;
