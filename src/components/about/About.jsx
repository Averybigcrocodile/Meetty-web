import cn from "classnames";
import styles from "../../style.module.css";
import { useTranslation } from "react-i18next";
import img1 from "../../img/about1.jpg";
import img2 from "../../img/about2.jpg";
import img3 from "../../img/about3.jpg";
import award from "../../img/award.png";

function About({ aboutId }) {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.about)} id={aboutId}>
      <div className={cn(styles.about__info)}>
        <div className={cn(styles.about__info_photo)}>
          <img src={img1} alt="" />
        </div>
        <div className={cn(styles.about__info_text)}>
          <span>
            <p>{t("about.text1")}</p>
            <p>{t("about.text2")}</p>
            <p>{t("about.text3")}</p>
            <p>{t("about.text4")}</p>
          </span>
          <div className={cn(styles.about__awards)}>
            <div className={cn(styles.about__awards_img)}>
              <img src={award} alt="" />
              <img src={award} alt="" />
              <img src={award} alt="" />
            </div>
            <div className={cn(styles.about__award_img)}>
              <div className={cn(styles.about__award)}>
                <img src={img2} alt="" />
              </div>
              <div className={cn(styles.about__award)}>
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
