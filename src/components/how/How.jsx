import cn from "classnames";
import styles from "../../style.module.css";
import { useTranslation } from "react-i18next";
import img1 from "../../img/how1.jpg";
import img2 from "../../img/how2.jpg";
import img3 from "../../img/products.jpg";
import img4 from "../../img/meetty.jpg";

function How({ howId }) {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.how)} id={howId}>
      <div className={cn(styles.how__info)}>
        <div className={cn(styles.how__info__block)}>
          <div className={cn(styles.how__info__block_img)}>
            <img src={img2} alt="" />
          </div>
          <div className={cn(styles.how__info__block_text)}>
            <p>***</p>
            <p>{t("how.text1")}</p>
            <p>***</p>
          </div>
        </div>
        <div className={cn(styles.how__info__block)}>
          <div className={cn(styles.how__info__block_img)}>
            <img src={img1} alt="" />
          </div>
          <div className={cn(styles.how__info__block_text)}>
            <p>***</p>
            <p>{t("how.text2")}</p>
            <p>***</p>
          </div>
        </div>
        <div className={cn(styles.how__info__block)}>
          <div className={cn(styles.how__info__block_img)}>
            <img src={img4} alt="" />
          </div>
          <div className={cn(styles.how__info__block_text)}>
            <p>***</p>
            <p>{t("how.text3")}</p>
            <p>***</p>
          </div>
        </div>
        <div className={cn(styles.how__info__block)}>
          <div className={cn(styles.how__info__block_img)}>
            <img src={img3} alt="" />
          </div>
          <div className={cn(styles.how__info__block_text)}>
            <p>***</p>
            <p>{t("how.text4")}</p>
            <p>***</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
